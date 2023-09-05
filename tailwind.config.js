/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{html,js}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            almostWhite: 'hsl(0, 0%, 98%)',
            mediumGray: 'hsl(0, 0%, 41%)',
            almostBlack: 'hsl(0, 0%, 8%)',
        },
        fontFamily: {
            epilogue: ['Epilogue', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
