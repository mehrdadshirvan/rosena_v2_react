<?php

namespace App\Http\Controllers\Pkg\FarazSMS;

use App\Http\Controllers\Controller;

class FarazSMSController extends Controller{

    //token & sender details
    private static $numberLogin = '09199312019';
    private static $passLogin = 'justdoitSEPEHR123$%^';
    private static $senderNumber = '983000505';


    /**
     * @param $numbers
     * @param $patternName
     * @param $patternData
     * @return bool|string|null
     */
    public static function SendByPattern($numbers, $patternName, $patternData = [])
    {
        $response = null;
        if (!empty($numbers)) {
            foreach ($numbers as $number) {
                $rcpt_nm = json_encode([$number]);
                $pattern_code = self::findPattern($patternName);
                $input_data = $patternData;
                $url = "https://ippanel.com/patterns/pattern?username=".self::$numberLogin."&password=" . urlencode(self::$passLogin) . "&from=".self::$senderNumber."&to=" . $rcpt_nm . "&input_data=" . urlencode(json_encode($input_data)) . "&pattern_code=$pattern_code";

                try {
                    $handler = curl_init($url);
                    curl_setopt($handler, CURLOPT_CUSTOMREQUEST, "POST");
                    curl_setopt($handler, CURLOPT_POSTFIELDS, $input_data);
                    curl_setopt($handler, CURLOPT_RETURNTRANSFER, true);
                    $response = curl_exec($handler);
                } catch (\Exception $e) {
                    $response = null;
                }
            }
        }
        return $response;
    }

    private static function findPattern($patternName)
    {
        if ($patternName == 'LoginSendVerificationCode') {
            return '05x111esjegdqh2';
        }
        return '';
    }

}
