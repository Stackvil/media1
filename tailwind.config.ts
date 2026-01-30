import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0F172A", // Deep Navy Blue
                    light: "#1E293B",
                    dark: "#020617",
                },
                secondary: {
                    DEFAULT: "#B45309", // Gold/Bronze
                    light: "#D97706",
                    dark: "#78350F",
                },
                accent: {
                    DEFAULT: "#DC2626", // Signal Red
                    hover: "#B91C1C",
                },
                neutral: {
                    50: "#F8FAFC",
                    100: "#F1F5F9",
                    200: "#E2E8F0",
                    300: "#CBD5E1",
                    400: "#94A3B8",
                    500: "#64748B",
                    600: "#475569",
                    700: "#334155",
                    800: "#1E293B",
                    900: "#0F172A",
                }
            },
            fontFamily: {
                serif: ['var(--font-serif)', "serif"],
                sans: ['var(--font-sans)', "sans-serif"],
            }
        },
    },
    plugins: [],
};
export default config;
