/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "custom-palette": {
                    100: "#FFD9B8",
                    200: "#F8B2A3",
                    300: "#F78686",
                    400: "#A1697D",
                    500: "#717E87",
                    600: "#A3B6B8",
                },
                navy: "#717E87", // Updated to match the 500 color from the new palette
            },
        },
    },
    plugins: [],
};
