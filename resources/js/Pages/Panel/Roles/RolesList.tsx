"use client"
import PanelLayout from "@/Pages/Panel/Layout/PanelLayout";
import { FaPencil } from "react-icons/fa6";
import {Link, router} from "@inertiajs/react";
import PaginationV1 from "@/Components/paginationV1";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Pagination from "@/Components/pagination";

export default function RolesList({auth,data}: any) {

    return (
        <>
            <PanelLayout>

                <div className="card-v2">
                    <div className="flex justify-end mb-3 gap-2">
                        <a href="/panel/roles/-1" target="_self" className="btn-first-v1">
                            Reset all role & permission
                        </a>
                        <Link href={`/panel/roles/create`} className="btn-primary-v1">
                            ایجاد نقش جدید
                        </Link>
                    </div>
                    <table className="table-v1">
                        <thead className="table-head-v1">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">
                                نام
                            </th>
                            <th scope="col" className="px-6 py-3">
                                گارد
                            </th>
                            <th scope="col" className="px-6 py-3">
                              تاریخ ایجاد
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Array.isArray(data?.data) && data?.data?.map((item: any) => {
                                return (
                                    <tr className="odd:bg-gray-50 odd:dark:bg-gray-900 even:bg-white even:dark:bg-gray-800 border-b dark:border-gray-700 px-6 ">
                                        <td className="py-3 px-6">
                                            <span>{item?.name}</span>
                                        </td>
                                        <td className="py-3 px-6">
                                            <span>{item?.guard_name}</span>
                                        </td>
                                        <td className="py-3 px-6">
                                            <span>{item?.show_created_at}</span>
                                        </td>
                                        <td className="py-3 px-6 justify-end flex">
                                            <Link href={`/panel/roles/${item?.id}`}>
                                                <FaPencil/>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>


                    {/*<Pagination links={data?.links}/>*/}
                    <PaginationV1 meta={data?.meta}/>
                </div>
            </PanelLayout>
        </>
    )
}
