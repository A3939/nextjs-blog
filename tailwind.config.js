/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F4796B',
                'primary-dark': '#001427',
            },
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
    },
    plugins: [],
};
