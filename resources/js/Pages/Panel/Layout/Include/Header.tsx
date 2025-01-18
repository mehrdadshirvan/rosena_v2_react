import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {Link, usePage} from "@inertiajs/react";
import { FaBars } from "react-icons/fa6";

export default function Header({setSidebarOpen}: any) {
    const auth = usePage().props.auth.user;

    return (
        <>
            <div
                className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" onClick={() => setSidebarOpen(true)}
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                    <FaBars />

                    <span className="sr-only">Open sidebar</span>
                </button>

                {/* Separator */}
                <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden"/>

                <div className="flex flex-1 gap-x-4 self-stretch justify-between items-center lg:gap-x-6">
                    <div className="max-w-2xl">
                        <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                            <input
                                name="search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6 ring-0 outline-none border-1 rounded-3xl border-gray-200 focus:ring-0"
                            />
                        </form>
                    </div>
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View notifications</span>
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"/>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <MenuButton className="-m-1.5 flex gap-2 items-center p-1.5">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="size-8 rounded-full bg-gray-50"
                                />
                                <span className="hidden lg:flex lg:items-center">
                              <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                               {auth?.name}
                              </span>
                    </span>
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <MenuItem key={'profile'}>
                                    <Link
                                        href={`/panel/users/${auth?.id}`}
                                        className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                    >
                                        پروفایل
                                    </Link>
                                </MenuItem>
                                <MenuItem key={'logout'}>
                                    <Link
                                        href={route('logout')}
                                        // @ts-ignore
                                        method={"POST"}
                                        className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                    >
                                        خروج از حساب
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    )
}
