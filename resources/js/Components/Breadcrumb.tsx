import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {FaHome} from "react-icons/fa";
import {Link} from "@inertiajs/react";

//
// const pages = [
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Project Nero', href: '#', current: true },
// ]

export default function Breadcrumb({pages}:any) {
    return (
        <nav aria-label="Breadcrumb" className="flex mb-3">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <Link href="/" className="text-gray-400 hover:text-gray-500">
                            <FaHome aria-hidden="true" className="size-4 shrink-0" />
                            <span className="sr-only">خانه</span>
                        </Link>
                    </div>
                </li>
                {pages?.map((page:any) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <BiChevronLeft aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                            <Link
                                href={page.href}
                                aria-current={page.current ? 'page' : undefined}
                                className="ms-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                {page.name}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
