import WebLayout from "@/Pages/Web/Layout/WebLayout";
import {Head, Link} from "@inertiajs/react";
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
                        <p>برای مرجوع کالا و شرایط بازگردانی کالا در صورت رعایت قوانین مرجوع (<Link
                            href="/pages/rules"><strong><span ><u>در بخش قوانین مرجوعی</u></span></strong></Link>)
                            میتوانید از طریق پروفایل کاربری بخش مرجوع کالا اقدام کنید.</p><p>همچنین میتوانید از
                        طریق<u>&nbsp;<Link href="/pages/contact-us"><strong><span>راه های ارتباطی رُزنا</span></strong></Link>&nbsp;</u>اقدام به
                        مرجوع کنید.</p><p>توجه داشته باشد که مرجوع یک کالا شامل شرایط و قوانین خودش هست و ممکن است در
                        بعضی محصولات این قوانین شدید تر و بیشتر باشد.</p><p>بخش قوانین سایت را همیشه برسی کنید تا از
                        جدید ترین قوانین با خبر باشد.</p><p><Link href="/pages/rules">برای ورود به بخش
                        قوانین کلیک کنید.</Link></p>
                    </div>
                </div>
            </WebLayout>
        </>
    )
}
