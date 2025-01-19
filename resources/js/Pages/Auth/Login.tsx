import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthLayout from '@/Pages/Auth/AuthLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Login() {


    const [verificationCodeSend,setVerificationCodeSend] = useState(false)

    const { data, setData, post, processing, errors, reset } = useForm({
        mobile: '',
        verification_code: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    const sendSmsVerificationCode: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('sms-validation-code'),{
            onFinish: (e) => {
                setVerificationCodeSend(true);
            }
        });
    }


    return (
        <AuthLayout>
            <Head title="ورود"/>

            <div>
                <div className="mb-6">
                    <ApplicationLogo className="w-1/2 m-auto block"/>
                    <h2 className="mt-8 text-xl font-bold leading-9 tracking-tight text-first mb-4">
                        ورود یا ثبت نام
                    </h2>
                    <p className="text-gray-600 text-xs mb-2">
                        برای ادامه شماره موبایل خود را وارد کنید.
                    </p>
                    <p className="text-gray-600 text-xs text-justify">
                        <i className="fa fa-info"></i>
                        استفاده از خدمات دکتیران به معنی پذیرش
                        <Link href="/pages/rules" className="text-first px-0.5">
                             قوانین و مقررات
                        </Link>
                        است.
                    </p>
                </div>
                <span className="text-rose-600" id="alertResponse"></span>
                <div className="mt-6">
                    <form action="#" id="LoginForm" method="POST" className="space-y-6">
                        <input type="hidden" name="verification_code" id="verification_code" value=""/>
                        <div>
                            <div className="mt-2 ltr" dir="ltr">

                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pe-3 pointer-events-none bg-gray-100 border-t border-s border-b border-gray-300 rounded-l-4xl text-lg">
                                        +98
                                    </div>
                                    <input type="text" id="mobile" name="mobile"
                                           onChange={(e) => setData('mobile', e.target.value)}
                                           aria-describedby="helper-text-explanation"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full ps-16 p-2.5 text-xl  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[55px] justNumber placeholder-gray-400  rounded-4xl"
                                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="9121234567" required/>
                                </div>
                                <p className="rtl text-center text-xs mt-1 text-red-600">
                                    شماره موبایل خود را <u>بدون صفر</u> وارد کنید.
                                </p>
                            </div>
                        </div>

                        <div id="sectionSubmit" className={verificationCodeSend ? "" : "hidden"} >
                            <div className="mb-3">
                                <label htmlFor="verification_code"
                                       className="form-label  text-gray-900 dark:text-white">
                                    کد تایید:<span className="text-rose-600">*</span>
                                    <span id="countdownSection"
                                          className="hidden">
                                        <span id="countdown">120 ثانیه</span>
                                        <a href="javascript:void(0)" className="d-none" id="resendSMSCode">
                                           ارسال مجدد کد!
                                        </a>
                                    </span>
                                </label>

                                <div className="flex gap-2 justify-between ltr" id="otp-form">
                                    <input type="text"
                                           max={6}
                                           maxLength={6}
                                           min={6}
                                           minLength={6}
                                           id="verification_code" name="verification_code"
                                           onChange={(e) => setData('verification_code', e.target.value)}
                                           aria-describedby="helper-text-explanation"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-xl  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[55px] placeholder-gray-400  rounded-4xl text-center"
                                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123456" required/>
                                </div>
                            </div>

                            <div className="text-center d-grid ">
                                <button
                                    className="flex gap-2 items-center w-full justify-center rounded-4xl bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  g-recaptcha"
                                    data-sitekey="##"
                                    data-callback='loginFormSubmit'
                                    data-action='submit'
                                    onClick={(e) => submit(e)}
                                    type="button">
                                    <span>ورود</span>
                                </button>
                            </div>
                        </div>
                        <div id="btnSMSVerification" className={!verificationCodeSend ? "" : "hidden"} >
                            <button type="button"
                                    onClick={(e) => sendSmsVerificationCode(e)}
                                    data-sitekey="##"
                                    data-callback='SMSVerification'
                                    data-action='submit'
                                    className="flex gap-2 items-center w-full justify-center rounded-4xl bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span>ارسال کد تایید</span>
                                <span className="loadingSendSMS hidden"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/*<form onSubmit={submit}>*/}
            {/*    <div>*/}
            {/*        <InputLabel htmlFor="mobile" value="mobile" />*/}

            {/*        <TextInput*/}
            {/*            id="mobile"*/}
            {/*            type="text"*/}
            {/*            name="mobile"*/}
            {/*            value={data.mobile}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="mobile"*/}
            {/*            isFocused={true}*/}
            {/*            onChange={(e) => setData('mobile', e.target.value)}*/}
            {/*        />*/}

            {/*        <InputError message={errors.mobile} className="mt-2" />*/}
            {/*    </div>*/}


            {/*    <div className="mt-4 hidden">*/}
            {/*        <label className="flex items-center">*/}
            {/*            <input type="checkbox" checked name="remember" id="remember" />*/}
            {/*            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">*/}
            {/*                مرا به خاطر بسپار*/}
            {/*            </span>*/}
            {/*        </label>*/}
            {/*    </div>*/}

            {/*    <div className="mt-4 flex items-center justify-end">*/}
            {/*        {canResetPassword && (*/}
            {/*            <Link*/}
            {/*                href={route('password.request')}*/}
            {/*                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"*/}
            {/*            >*/}
            {/*                Forgot your password?*/}
            {/*            </Link>*/}
            {/*        )}*/}

            {/*        <PrimaryButton className="ms-4" disabled={processing}>*/}
            {/*            Log in*/}
            {/*        </PrimaryButton>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </AuthLayout>
    );
}
