import {Dialog, DialogBackdrop, DialogPanel, TransitionChild} from "@headlessui/react";
import {Link} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { MdClose } from "react-icons/md";

export default function MobileMenuSideBar({sidebarOpen, setSidebarOpen, navigation, classNames}: any) {
    return (
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden"
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
            />

            <div className="fixed inset-0 flex">
                <DialogPanel
                    transition
                    className="relative ms-0 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                >


                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <Link href={'/'}>
                                <ApplicationLogo className="w-1/2 px-2"/>
                            </Link>
                            <TransitionChild>
                                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                    <MdClose />

                                </button>
                            </TransitionChild>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item: any) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}
                                                >

                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                {/*<li className="mt-auto">*/}
                                {/*    <a*/}
                                {/*        href="#"*/}
                                {/*        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"*/}
                                {/*    >*/}

                                {/*        تنظیمات*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </nav>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
