import WebLayout from "@/Pages/Web/Layout/WebLayout";
import {Head} from "@inertiajs/react";
import MetaTags from "@/Components/MetaTags";

export default function ContactUs(){
    return(
        <>
            <Head title={'تماس با ما'}></Head>
            <MetaTags
                title="تماس با ما"
                description="فروشگاه اینترنتی رزنا"
                image=''
                name='رزنا'
            />
            <WebLayout>
                <div className="container mx-auto max-w-screen-xl  m-auto mt-6 mb-6 ">
                    <div className="card-v2 text-justify leading-10 text-sm ">

                        <p>ارتباط با ما&nbsp;</p><p  ><span  >شنبه تا چهارشنبه از ساعت 10 الی 20</span>
                    </p><p>برای ارتباط با ما میتوانید از طریق:</p><p  >فرم ارتباط با ما</p><p
                        >شماره تماس : 09228417016</p><p
                        >اینستاگرام ، تلگرام &nbsp;و واتس آپ رزنا</p><p
                        >با ما در ارتباط باشید.</p><p>&nbsp;رزنا در کمترین زمان ممکن پاسخ گو
                        مشکلات شما خواهد بود.</p><p>میتوانید انتقادات و پیشنهادات خود را زیر از طریق ایمیل و اینستاگرام
                        ارسال کنید.</p><p>*<span>&nbsp;</span>در صورت عدم پاسخ گویی
                        تلفن پیام خود را در اینستاگرام و یا واتس آپ برای ما ارسال کنید همکاران ما به زودی پاسخ گوی شما
                        هستند*</p><p><br/></p><p><span ><strong><span
                       >برای ارتباط با رزنا به ایمیل سازمانی سایت پیام دهید: <a
                        href="mailto:info@rosena.ir">info [at] rosena [dot] ir</a>&nbsp;</span></strong></span></p>
                        <p>آدرس: ایران، تهران | مهرداد شیروان</p>
                    </div>
                </div>
            </WebLayout>
        </>
    )
}
