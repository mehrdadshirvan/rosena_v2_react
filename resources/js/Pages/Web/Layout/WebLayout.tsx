import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';
import {PropsWithChildren} from 'react';
import WebFooter from "@/Pages/Web/Layout/Include/WebFooter";
import WebHeader from "@/Pages/Web/Layout/Include/WebHeader";

export default function WebLayout({children}: PropsWithChildren) {
    return (
        <div>
            <WebHeader/>
            <div>
                {children}
            </div>
            <WebFooter/>
        </div>
    );
}
