import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: { serif: ["Roboto Mono", "monospace"] },
            backgroundImage: {
                headerPatternMob:
                    "url('./assets/images/header-background-mob.webp')",
                headerPatternTab:
                    "url('./assets/images/header-background-tab.webp')",
                headerPatternDes:
                    "url('./assets/images/header-background-des.webp')",
                primaryDarkGradient:
                    "linear-gradient(180deg, rgba(106, 4, 4, 0.05) 0%, rgba(106, 4, 4, 0.60) 23.23%, rgba(106, 4, 4, 0.60) 78.44%, rgba(106, 4, 4, 0.05) 100%)",
            },
            colors: {
                primaryLight: "var(--primaryLight)",
                accent: "var(--accent)",
                transparent: { primaryLight7: "#FEEDED12" },
            },
            boxShadow: {
                boxPrimaryLight: "5px 5px 7px rgba(254, 237, 237, 0.3)",
            },
            dropShadow: {
                textPrimaryLight: "5px 5px 5px rgba(254, 237, 237, 0.7)",
                textDark: "5px 5px 3px rgba(255, 134, 142, 0.7)",
            },
        },
    },
    plugins: [],
};
export default config;
