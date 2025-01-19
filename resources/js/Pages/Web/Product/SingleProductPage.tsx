"use client"
import WebLayout from "@/Pages/Web/Layout/WebLayout";
import Breadcrumb from "@/Components/Breadcrumb";
import {FaAngleLeft, FaTruckFast} from "react-icons/fa6";
import {BsInfoCircle} from "react-icons/bs";
import {Head} from "@inertiajs/react";
import MetaTags from "@/Components/MetaTags";

export default function SingleProductPage({data}: any) {
    const pages = [
        {name: data?.name, href: window.location.href, current: true},
    ]
    return (
       <>
           <Head title={data?.name}></Head>
           <MetaTags
               title={data?.name}
               description={data?.name}
               image=''
               name='رزنا'
           />
           <WebLayout>
               <div className="container mx-auto max-w-screen-xl  m-auto mt-6 mb-6 ">
                   <Breadcrumb pages={pages}/>
                   <div className="card-v2 mb-6">
                       <div className="md:grid grid-cols-12 gap-3">
                           <div className="col-span-4">
                               <div className="md:grid grid-cols-12">
                                   <div className="col-span-1">
                                       icin
                                   </div>
                                   <div className="col-span-11">
                                       <img src={data?.image_url} alt=""/>
                                   </div>
                               </div>
                           </div>
                           <div className="col-span-8">
                               <div className="block border-b border-gray-100 pb-2 mb-2">
                                   <h1 className="text-md">{data?.name}</h1>
                                   {data?.en_name ? `<h2>${data?.en_name}</h2>` : ''}
                               </div>
                               <div className="md:grid grid-cols-12">
                                   <div className="col-span-8">
                                       detais
                                   </div>
                                   <div className="col-span-4">
                                       <div className="bg-gray-100 rounded-xl border border-gray-300/2 p-3">

                                           <div>
                                               <div><a className="styles_Link__RMyqc" target="_blank"
                                                       href="/seller/EFSV7/">
                                                   <div className="w-full px-4 flex" data-cro-id="pdp-seller-info-cta">
                                                       <div className="py-3 flex grow pt-0 pb-4">
                                                           <div className="ml-4">
                                                               <div className="relative">
                                                                   <div className="flex">

                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div className="flex w-full">
                                                               <div>
                                                                   <div className="flex items-center mb-2 lg:mb-1"><span><p
                                                                       className="text-neutral-700 ml-2 text-subtitle">فروشگاه لیموشیرین</p></span>
                                                                   </div>
                                                                   <div
                                                                       className="w-full flex items-center content-center text-body-2">
                                                                       <div className="pl-2 flex items-center divider"><p
                                                                           className="ml-1 text-body2-strong"
                                                                       >۱۰۰%</p>
                                                                           <p className="text-neutral-500 whitespace-nowrap">رضایت
                                                                               از کالا</p></div>
                                                                       <div className="pr-2 flex items-center"><p
                                                                           className="text-neutral-500 ml-1">عملکرد</p><p
                                                                           className="whitespace-nowrap text-body2-strong"
                                                                       >عالی</p>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </a></div>
                                           </div>
                                           <hr className="my-2"/>
                                           <div className="mb-4">
                                               <div className="flex justify-end items-center gap-2">
                                                   <s className="text-xs ms-1 text-gray-500">5,000,000</s>
                                                   <span className="bg-first rounded-3xl text-white text-xs flex items-center justify-center px-2 py-0.5">2%</span>
                                               </div>
                                               <div className="flex justify-end items-center gap-1">
                                                   <span className="text-lg">4,900,000</span>
                                                   <span className="text-xs ms-1">تومان</span>
                                               </div>
                                           </div>

                                           <button className="btn-first-v1 block m-auto w-full">
                                               افزودن به سبد خرید
                                           </button>
                                           <hr className="my-2"/>
                                           <a href="#"
                                              className="flex justify-between items-center text-xs py-1 text-gray-500">
                                               <div className="flex items-center gap-2">
                                                   <FaTruckFast/>
                                                   <p>ارسال رزنا از ۱ روز کاری دیگر</p>
                                               </div>
                                               <FaAngleLeft/>
                                           </a>
                                           <hr className="my-2"/>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="card-v2">
                       {data?.content}
                   </div>
               </div>
           </WebLayout>
       </>
    );
}
