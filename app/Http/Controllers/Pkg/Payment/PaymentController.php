<?php

namespace App\Http\Controllers\Pkg\Payment;

use App\Constants\FinancialConstant;
use App\Constants\TransactionConstant;
use App\Http\Controllers\Controller;
use App\Models\Financial;
use App\Models\Transactions;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Shetabit\Multipay\Exceptions\InvalidPaymentException;
use Shetabit\Multipay\Invoice;
use Shetabit\Payment\Facade\Payment;

class PaymentController extends Controller
{


    /**
     * uuid from financial Model
     * @param string $uuid
     * @return mixed
     * @throws Exception
     */
    public static function createInvoice($uuid)
    {
        $financial = Financial::where('uuid', $uuid)->firstOrFail();
        $url = url('/payment/validation?id=' . $uuid);
        return Payment::callbackUrl($url)->purchase(
            (new Invoice)->amount($financial->amount),
            function ($driver, $transactionId) use ($financial) {
                $financial->transactions()->create([
                                                       'user_id' => auth()->id(),
                                                       'transaction_id' => $transactionId,
                                                       'type' => TransactionConstant::TYPE_IN,
                                                       'amount' => $financial->amount]);
                //                dd($driver,$transactionId);
            }
        )->pay()->render();
    }

    /**
     * @param $transId
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Foundation\Application
     */
    public static function paymentValidation(Request $request)
    {
        //id = financial id
        //Authority = transaction id
        //Status == OK NOK
        $financial = Financial::where('uuid', $request->input('id'))->firstOrFail();
        $transaction = Transactions::query()->where('transaction_id', $request->input('Authority'))->firstOrFail();
        try {
            $receipt = Payment::amount($financial->amount)->transactionId($request->input('Authority'))->verify();
            $getReferenceId = $receipt->getReferenceId();
            $PaymentStatus = 'OK';
            $financial->update(['status' => FinancialConstant::STATUS_DONE, 'done_date' => Carbon::now()]);
            $transaction->update(['status' => TransactionConstant::STATUS_VERIFIED]);
            $message = '';
        } catch (InvalidPaymentException $exception) {
            /**
             * when payment is not verified, it will throw an exception.
             * We can catch the exception to handle invalid payments.
             * getMessage method, returns a suitable message that can be used in user interface.
             **/
            $message = $exception->getMessage();
            $PaymentStatus = 'NOK';
            $financial->update(['status' => FinancialConstant::STATUS_PENDING]);
            $transaction->update(['status' => TransactionConstant::STATUS_NOT_VERIFIED]);
        }
        if ($PaymentStatus == 'OK') {
            $amount = $financial->amount;
            $user = User::query()->where('id', $financial->user_id)->firstOrFail();
            if ($financial->type == FinancialConstant::TYPE_INCREASE_WALLET) {
                $user->update(['wallet_balance' => $user->wallet_balance + $amount]);
            } elseif ($financial->type == FinancialConstant::TYPE_DECREASE_WALLET) {
                $user->update(['wallet_balance' => $user->wallet_balance - $amount]);
            }
        }

        $return = [
            'transaction' => $transaction->transaction_id,
            'date' => ConvertDateMiladiToJalali($transaction->created_at, 'Y/m/d H:i:s'),
            'amount' => $financial->amount,
            'financial' => $financial->uuid,
            'paymentStatus' => $PaymentStatus,
            'message' => $message,
        ];
        return view('payment.verified', $return);
    }
}
