/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    50: '#fffaf0',
                    100: '#fffaf0',
                    200: '#fffaf0',
                    300: '#fffaf0',
                    400: '#9acd32',
                    500: '#9acd32',
                    600: '#9acd32',
                    700: '#9acd32',
                    800: '#9acd32',
                    900: '#9acd32',
                    950: '#9acd32'
                },
                'blush': {
                    50: '#fffaf0',
                    100: '#fffaf0',
                    200: '#fffaf0',
                    300: '#fffaf0',
                    400: '#9acd32',
                    500: '#9acd32',
                    600: '#9acd32',
                    700: '#9acd32',
                    800: '#9acd32',
                    900: '#9acd32',
                    950: '#9acd32'
                },
                'gold': {
                    50: '#fffaf0',
                    100: '#fffaf0',
                    200: '#fffaf0',
                    300: '#fffaf0',
                    400: '#9acd32',
                    500: '#9acd32',
                    600: '#9acd32',
                    700: '#9acd32',
                    800: '#9acd32',
                    900: '#9acd32',
                    950: '#9acd32'
                },
                'cream': {
                    50: '#fffaf0',
                    100: '#fffaf0',
                    200: '#fffaf0',
                    300: '#fffaf0',
                    400: '#9acd32',
                    500: '#9acd32',
                    600: '#9acd32',
                    700: '#9acd32',
                    800: '#9acd32',
                    900: '#9acd32',
                    950: '#9acd32'
                },
            },
            fontFamily: {
                'serif': ['Playfair Display', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
