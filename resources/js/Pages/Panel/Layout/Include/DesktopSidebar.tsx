import {Link} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function DesktopSidebar({navigation,classNames}:any) {
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto border-e border-gray-200 bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                    <Link href={`/`}>
                        <ApplicationLogo />
                    </Link>
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigation.map((item:any) => (
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

                        {/*        Settings*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
