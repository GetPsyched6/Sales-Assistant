/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ups-brown': {
                    DEFAULT: '#351C15',
                    light: '#4A2C24',
                    dark: '#2A1610',
                },
                'ups-gold': {
                    DEFAULT: '#FFB500',
                    light: '#FFCD5C',
                    dark: '#CC9100',
                },
                'ups-teal': {
                    DEFAULT: '#00A3AD',
                    light: '#2EC4B6',
                    dark: '#008B94',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

