import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // PRIMARY
                primary: {
                    DEFAULT: "#f29422",
                    50: "#fef8ec",
                    100: "#fce9c9",
                    200: "#f9d18e",
                    300: "#f5b354",
                    400: "#f29422",
                    500: "#ec7714",
                    600: "#d1540e",
                    700: "#ad3910",
                    800: "#8d2c13",
                    900: "#742513",
                    950: "#421106",
                    transparent: "#d5cdc0a2",
                },
                // SECONDARY
                secondary: {
                    DEFAULT: "#f2506e",
                    50: "#fff1f2",
                    100: "#ffe4e6",
                    200: "#fdced5",
                    300: "#fca5b1",
                    400: "#f97389",
                    500: "#f2506e",
                    600: "#de204d",
                    700: "#bb153f",
                    800: "#9d143c",
                    900: "#86153a",
                    950: "#4b061b",
                    transparent: "#4b061ba2",
                },
                // LIGHT
                light: {
                    DEFAULT: "#ffffff",
                    50: "#ffffff",
                    100: "#efefef",
                    200: "#dcdcdc",
                    300: "#bdbdbd",
                    400: "#989898",
                    500: "#7c7c7c",
                    600: "#656565",
                    700: "#525252",
                    800: "#464646",
                    900: "#3d3d3d",
                    950: "#292929",
                    transparent: "#292929a2",
                },
                // DARK
                dark: {
                    DEFAULT: "#342c2a",
                    50: "#f4f4f2",
                    100: "#e4e2dd",
                    200: "#cbc7bd",
                    300: "#aea496",
                    400: "#968979",
                    500: "#87796b",
                    600: "#74655a",
                    700: "#5e514a",
                    800: "#514742",
                    900: "#483e3b",
                    950: "#342c2a",
                    transparent: "#342c2ada",
                    transparentLow: "#342c2a36",
                },
                // CONTRAST
                contrast: {
                    DEFAULT: "#f2e0d0",
                    50: "#fbf6f1",
                    100: "#f2e0d0",
                    200: "#ecd1bc",
                    300: "#dfb192",
                    400: "#d28b65",
                    500: "#c86f47",
                    600: "#ba5a3c",
                    700: "#9b4733",
                    800: "#7d3b2f",
                    900: "#653229",
                    950: "#361814",
                    transparent: "#361814a2",
                },
                // SUCCESS
                success: {
                    DEFAULT: "#00a86b",
                    50: "#ebfef4",
                    100: "#d0fbe3",
                    200: "#a4f6cc",
                    300: "#6aebb1",
                    400: "#2fd891",
                    500: "#0abf79",
                    600: "#00a86b",
                    700: "#007c52",
                    800: "#036242",
                    900: "#045038",
                    950: "#012d21",
                    transparent: "#012d21a2",
                },
                // WARNING
                warning: {
                    DEFAULT: "#fcb900",
                    50: "#fffeea",
                    100: "#fffac5",
                    200: "#fff685",
                    300: "#ffeb46",
                    400: "#ffdb1b",
                    500: "#fcb900",
                    600: "#e29000",
                    700: "#bb6602",
                    800: "#984e08",
                    900: "#7c400b",
                    950: "#482100",
                    transparent: "#482100a2",
                },
                // DANGER
                danger: {
                    DEFAULT: "#ff4d4f",
                    50: "#fff1f1",
                    100: "#ffdfdf",
                    200: "#ffc5c6",
                    300: "#ff9d9e",
                    400: "#ff6466",
                    500: "#ff4d4f",
                    600: "#ed1517",
                    700: "#c80d0f",
                    800: "#a50f11",
                    900: "#881415",
                    950: "#4b0405",
                    transparent: "#4b0405a2",
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};