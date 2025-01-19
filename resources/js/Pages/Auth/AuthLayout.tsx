import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';
import {PropsWithChildren} from 'react';

export default function AuthLayout({children}: PropsWithChildren) {
    return (
        <div className="p-8 max-w-md m-auto w-full">
            <section className="py-12">
                <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    {children}
                </div>
            </section>
        </div>
    );
}
