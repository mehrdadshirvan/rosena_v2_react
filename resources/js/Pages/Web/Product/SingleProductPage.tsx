"use client"
import WebLayout from "@/Pages/Web/Layout/WebLayout";
import Breadcrumb from "@/Components/Breadcrumb";

export default function SingleProductPage({data}:any){
    const pages = [
        {name: data?.name, href: window.location.href, current: true},
    ]
    return (
        <WebLayout>
            <div className="container mx-auto max-w-screen-xl  m-auto mt-6 mb-6 ">
                <Breadcrumb pages={pages}/>
                <div className="card-v2 text-justify leading-10 text-sm ">
                    {data?.name}
                </div>
            </div>
        </WebLayout>
    );
}
