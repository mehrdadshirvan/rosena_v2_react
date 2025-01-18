"use client"
import PanelLayout from "@/Pages/Panel/Layout/PanelLayout";
import { FaPencil } from "react-icons/fa6";
import {Link} from "@inertiajs/react";
import PaginationV1 from "@/Components/paginationV1";

export default function Users({data}: any) {
    return (
        <>
            <PanelLayout>
                <div className="card-v2">
                    <table className="table-v1">
                        <thead className="table-head-v1">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">
                                عکس
                            </th>
                            <th scope="col" className="px-6 py-3">
                                نام
                            </th>
                            <th scope="col" className="px-6 py-3">
                                شماره موبایل
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ایمیل
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
                                            <span>
                                                <img src={item?.avatar_url} alt=""/>
                                            </span>
                                        </td>
                                        <td className="py-3 px-6">
                                            <span>{item?.name}</span>
                                        </td>
                                        <td className="py-3 px-6">
                                            <span>{item?.mobile}</span>
                                        </td>
                                        <td className="py-3 px-6">
                                            <span>{item?.email}</span>
                                        </td>
                                        <td className="py-3 px-6">
                                            <Link href={`/panel/users/${item?.id}`}>
                                                <FaPencil />
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>


                    <PaginationV1  data={data}/>
                </div>
            </PanelLayout>
        </>
    )
}
