/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'coffee-img': "url('../public/coffee.jpeg')",
            }
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["dracula", "lofi"],
    }
};
