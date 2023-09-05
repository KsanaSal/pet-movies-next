import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: { serif: ["Jost", "serif"] },
            backgroundImage: {
                headerPatternMob:
                    "url('./assets/images/header-background-mob.webp')",
                headerPatternTab:
                    "url('./assets/images/header-background-tab.webp')",
                headerPatternDes:
                    "url('./assets/images/header-background-des.webp')",
            },
        },
    },
    plugins: [],
};
export default config;
