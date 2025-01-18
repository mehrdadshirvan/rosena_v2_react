"use client"
import {Link, usePage} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {BiShoppingBag} from "react-icons/bi";
import {BsCart4} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";

export default function WebHeader() {
    const auth = usePage().props.auth.user;
    return (
        <>
            <header className="z-60" id="myHeaderWeb">
                <div className="bg-white border-gray-200 dark:bg-gray-900 md:block hidden" id="desktopHeader">
                    <div className="grid grid-cols-12 items-center mx-auto max-w-screen-xl p-4 gap-4">
                        <div className="col-span-2">
                            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse no-underline">
                                <ApplicationLogo className="w- fill-current text-gray-500"/>
                            </Link>
                        </div>
                        <div className="col-span-8">
                            <div className="items-center justify-center flex w-full">
                                <form method="get" className="w-full relative"
                                      action="/search">
                                    <input type="hidden" name="_t" id="_t"/>
                                    <input type="text"
                                           className="w-full rounded-xl border bg-gray-50 border-gray-100 py-3 outline-none focus:border-gray-300/50 focus:ring-0"
                                           name="search"
                                           id="search"
                                           x-model="search"
                                           placeholder="جستجوی محصول، برند ..."
                                    />
                                    <button className="absolute end-4 top-3.5 hover:scale-150 transition-all">
                                        <i className="fa-solid fa-search text-gray-500"/>
                                    </button>
                                </form>
                            </div>

                        </div>
                        <div className="col-span-2">
                            <div className="flex items-center justify-end space-x-6 rtl:space-x-reverse">
                                {auth ? (
                                   <div className="flex  items-center gap-3 justify-end">
                                       <Link
                                           href={'/profile/dashboard'}
                                           className=""
                                       >
                                           <CgProfile className="size-7"/>
                                       </Link>
                                       <Link
                                           href={'/profile/dashboard'}
                                           className=""
                                       >
                                           <BsCart4 className="size-6"/>

                                       </Link>
                                   </div>

                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="btn-first-v1"
                                        >
                                            ورود / ثبت نام
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-gray-200 dark:bg-gray-900 border-b md:hidden" id="mobileHeader">
                    <div className="grid grid-cols-12 items-center mx-auto max-w-screen-xl p-4">
                        <div className="col-span-2">
                            <button className="w-full flex justify-start items-center text-xl text-gray-400">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                        <div className="col-span-8">
                            <Link href="/"
                               className="flex items-center justify-center space-x-3 rtl:space-x-reverse no-underline">
                                خانه
                            </Link>
                        </div>
                        <div className="col-span-2">
                            <button className="w-full flex justify-end items-center text-xl text-gray-400">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="bg-white border-b shadow-sm dark:bg-gray-700 md:block hidden" x-data="NavMenu">
                    <div className="max-w-screen-xl px-4 py-3 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <Link href="/" className="text-gray-900 dark:text-white "
                                          aria-current="page">خانه</Link>
                                </li>
                                <li>
                                    <Link href="/pages/services" className="text-gray-900 dark:text-white ">
                                        خدمات
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pages/about-us" className="text-gray-900 dark:text-white ">
                                        ابزارهای رایگان سلامت
                                    </Link>
                                </li>
                                <li>
                                    <a href="/blog" className="text-gray-900 dark:text-white ">
                                        مجله سلامت
                                    </a>
                                </li>
                                <li>
                                    <Link href="/pages/faq" className="text-gray-900 dark:text-white ">
                                        سوال رایگان از پزشک

                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


        </>
    )
}
