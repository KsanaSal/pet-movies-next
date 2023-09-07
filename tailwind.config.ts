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
                transparent: { primaryLight7: "#FEEDED12" },
            },
        },
    },
    plugins: [],
};
export default config;
