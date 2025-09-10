/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Tato řádka říká Tailwindu, aby prohledal všechny relevantní soubory ve složce src
    ],
    theme: {
        extend: {
            keyframes: {
    'fade-in-up': { /* ... stávající animace ... */ },
    
    // ZDE PŘIDÁME NOVÉ ANIMACE
    'fall': {
        '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
        '100%': { transform: 'translateY(30vh) rotate(360deg)', opacity: '0' },
    },
    'sway-1': {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(40px)' },
    },
    'sway-2': {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(-40px)' },
    },
},
            colors: {
                // Nová paleta zelené
                green: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
                // Nová paleta béžové
                beige: {
                    50: '#fdfcf9',
                    100: '#f9f5e9',
                    200: '#f2eada',
                    300: '#e9dcc1',
                    400: '#dcc5a1',
                    500: '#d0ae81',
                    600: '#c19a67',
                    700: '#a98050',
                    800: '#916b3f',
                    900: '#785836',
                    950: '#422f1d',
                },
            },
            fontFamily: {
                'serif': ['Playfair Display', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}