import {Link} from "@inertiajs/react";

export default function PaginationV1({meta}: any) {

    return (
        <>
            <div className="pagination" dir="ltr">
                <div className="flex items-center justify-between border-t border-gray-200  py-3 px-1">
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                            <div>
                                <select name="limit"
                                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-[60px] rtl">
                                    <option  value="10">10</option>
                                    <option  value="20">20</option>
                                    <option  value="50">50</option>
                                    <option  value="100">100</option>
                                    <option  value="200">200</option>
                                </select>
                            </div>
                            <p className="text-sm text-gray-700">
                                نمایش
                                <span className="font-medium px-1">{meta?.from}</span>
                                تا
                                <span className="font-medium  px-1">{meta?.to}</span>
                                از
                                <span className="font-medium px-1">{meta?.total}</span>
                                نتیجه
                            </p>
                        </div>
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md dark:border-gray-700 shadow-sm rtl"
                                 aria-label="Pagination">
                                {
                                    Array.isArray(meta?.links) && meta?.links?.map((item:any) => {
                                        return (
                                            <Link href={item?.url}
                                                  preserveScroll
                                                  key={item?.label}
                                                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:text-gray-800 focus:z-20 focus:outline-offset-0

                                                 ${item?.active ? 'bg-gray-100 dark:bg-white text-gray-800' : 'bg-white dark:bg-gray-800 dark:text-white'}`}>
                                                <span dangerouslySetInnerHTML={{__html: item?.label}}/>
                                            </Link>
                                        )
                                    })
                                }
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
