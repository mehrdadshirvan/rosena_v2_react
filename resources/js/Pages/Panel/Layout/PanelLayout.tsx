'use client'
import { useState, useEffect } from 'react';

import {PropsWithChildren} from 'react';
import Header from "@/Pages/Panel/Layout/Include/Header";
import DesktopSidebar from "@/Pages/Panel/Layout/Include/DesktopSidebar";
import MobileMenuSideBar from "@/Pages/Panel/Layout/Include/MobileMenuSideBar";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export default function PanelLayout({children}: PropsWithChildren) {

    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [navigation, setNavigation] = useState([
        { name: 'داشیرد', href: '/panel/dashboard', current: false },
        { name: 'کاربران', href: '/panel/users', current: false },
        { name: 'محصولات', href: '/panel/products', current: false },
        { name: 'کامنت ها', href: '/panel/comments', current: false },
        { name: 'تگها', href: '/panel/tags', current: false },
        { name: 'نقش های کاربری', href: '/panel/roles', current: false },
        { name: 'سطح دسترسی', href: '/panel/permissions', current: false },
    ]);

    useEffect(() => {
        const currentPath = window.location.pathname;

        setNavigation(prevNavigation =>
            prevNavigation.map(item => ({
                ...item,
                current: currentPath.startsWith(item.href) // بررسی می‌کند که آیا URL با href شروع می‌شود
            }))
        );
    }, []);

    return (
        <>
            <div>
                <MobileMenuSideBar  sidebarOpen={sidebarOpen}
                                    setSidebarOpen={setSidebarOpen}
                                    classNames={classNames}
                                    navigation={navigation}/>

                <DesktopSidebar  navigation={navigation}
                                 classNames={classNames} />

                <div className="lg:ps-72">

                    <Header setSidebarOpen={setSidebarOpen}/>

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
