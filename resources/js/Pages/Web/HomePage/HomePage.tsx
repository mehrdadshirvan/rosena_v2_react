"use client"


import WebLayout from "@/Pages/Web/Layout/WebLayout";
import Slider from "@/Pages/Web/HomePage/Slider";
import {Head} from "@inertiajs/react";
import {Helmet} from "react-helmet-async";
import MetaTags from "@/Components/MetaTags";
import ProductSlider from "@/Components/ProductSlider";

export default function HomePage({sliders,products}:any){
    return (
        <>
            <Head title={'خانه'}></Head>
            <MetaTags
                title="فروشگاه اینترنتی رزنا"
                description="فروشگاه اینترنتی رزنا"
                image=''
                name='رزنا'
            />

            <WebLayout>
                <Slider sliders={sliders?.data}/>
                <ProductSlider lists={products?.data}/>
                <ProductSlider lists={products?.data}/>
                <ProductSlider lists={products?.data}/>
                <ProductSlider lists={products?.data}/>
            </WebLayout>
        </>
    )
}
