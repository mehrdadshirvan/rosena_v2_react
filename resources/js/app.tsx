import '../css/app.css';
import './bootstrap';

import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {createRoot} from 'react-dom/client';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {HelmetProvider} from "react-helmet-async";
import {LoadingBarContainer} from "react-top-loading-bar";
import {useRef, useState} from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

// import.meta.env.VITE_APP_NAME
const appName = 'رزنا';
const queryClient = new QueryClient()

createInertiaApp({
    title: (title) => `${title} | ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({el, App, props}) {
        document.body.setAttribute('dir', 'rtl');
        const root = createRoot(el);
        root.render(
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <LoadingBarContainer>
                        <App {...props} />
                    </LoadingBarContainer>
                </QueryClientProvider>
            </HelmetProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
