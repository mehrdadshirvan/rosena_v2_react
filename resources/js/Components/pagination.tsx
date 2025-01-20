import {Link} from "@inertiajs/react";

export default function Pagination({links}: any) {

    return (
        <>
            <nav className="text-center mt-4">
                {
                    links?.map((link:any) => (
                        <Link
                            preserveScroll
                            href={link?.url || ""}
                            key={link?.label}
                            className={`inline-block py-2 px-3 rounded-lg  text-xs ${link?.active ? `bg-gray-900 text-gray-100` : 'text-gray-500'} ${!link?.url ? `text-gray-500 cursor-not-allowed` : `hover:bg-gray-900`}`}
                            dangerouslySetInnerHTML={{__html: link?.label}}></Link>
                    ))
                }
            </nav>
        </>
    )
}
