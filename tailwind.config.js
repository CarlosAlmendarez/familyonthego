import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            blue: {
              light: '#85d7ff',
              DEFAULT: '#1fb6ff',
              dark: '#009eeb',
            },
            pink: {
              light: '#ff7ce5',
              DEFAULT: '#ff49db',
              dark: '#ff16d1',
            },
            gray: {
              darkest: '#1f2d3d',
              dark: '#3c4858',
              DEFAULT: '#c0ccda',
              light: '#e0e6ed',
              lightest: '#f9fafc',
            },
            black: {
                DEFAULT: '#232323',
            }
        },

        textColor: {
            primary: '#FFFFFF',
            secondary: '#000000',
            innactive: '#B3B3B3',
        },
      
       
    },

    plugins: [forms],

    

};
