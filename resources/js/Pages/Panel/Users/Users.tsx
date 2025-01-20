"use client"
import PanelLayout from "@/Pages/Panel/Layout/PanelLayout";
import { FaPencil } from "react-icons/fa6";
import {Link, router} from "@inertiajs/react";
import PaginationV1 from "@/Components/paginationV1";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Pagination from "@/Components/pagination";

export default function Users({auth,data,queryParams = null}: any) {

    queryParams = queryParams || {};

    const searchFieldChanged = (name:any,value:any)=> {
        value ? queryParams[name] = value : delete queryParams[name];
        router.get(route('panel.users.index'),queryParams)
    }

    const setFilter = (name:any,e:any) => {
       if(e.key !== "Enter") return;
        searchFieldChanged(name,e.target.value);
    }
    return (
        <>
            <PanelLayout>

                <div className="card-v2">
                    <div className="filter mb-6">
                        <TextInput
                            placeholder="نام کاربر"
                            onBlur={e => searchFieldChanged('search', e.target.value)}
                            onKeyDown={e => setFilter('search', e)}
                            defaultValue={queryParams.search}
                        />
                        <SelectInput
                            defaultValue={queryParams.type}
                            onChange={(e) => searchFieldChanged('type',e.target.value)}>
                            <option value="">All</option>
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </SelectInput>
                    </div>

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
