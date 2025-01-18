import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './node_modules/flowbite/**/*.js',
        './public/assets/js/*.js',
    ],

    theme: {
        colors: {
            'first': {
                DEFAULT: '#e61862',
                100: '#cc9cad',
                200: '#cc869e',
                300: '#dd86a5',
                400: '#dd6f95',
                500: '#df5b89',
                600: '#dd447a',
                700: '#df2969',
                800: '#d31b5b',
                900: '#d81d5e',
            },
            'second': {
                DEFAULT: '#83B5F6',
                100: '#d3dbf6',
                200: '#cad5f6',
                300: '#c5d6f6',
                400: '#becef6',
                500: '#b3c9f6',
                600: '#adc1f6',
                700: '#a4c3f6',
                800: '#9ac0f6',
                900: '#8dbdf6',
            },
            'third': {
                DEFAULT: '#ffbc01',
                100: '#fff5d1',
                200: '#fff3c2',
                300: '#ffeeb4',
                400: '#ffeca4',
                500: '#ffe588',
                600: '#ffe072',
                700: '#ffdc5f',
                800: '#ffd443',
                900: '#ffc72a',
            },
            'fourth': {
                DEFAULT: '#83cc80',
                100: '#bdccb9',
                200: '#b8ccb4',
                300: '#b8ccb4',
                400: '#b5ccb0',
                500: '#adcca8',
                600: '#a3cc9f',
                700: '#99cc97',
                800: '#90cc8f',
                900: '#8dcc8a',
            },
            'danger': {
                DEFAULT: "#ff5d5d",
            },
            'secondary': {
                DEFAULT: '#666666',
            }
        },
        fontFamily: {
            PlayfairDisplay: ['IranSans'],
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            borderRadius: {
                '4xl': '40px',
            },
        },
    },

    plugins: [
        require('flowbite/plugin'),
        forms
    ],
};
