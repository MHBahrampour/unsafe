import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      colors: {
        common: { black: "#1b202e", white: "#9497a2" },
        primary: { main: "#407d70", light: "#468d7f", dark: "#3b6d61" },
        secondary: { main: "#6d3b47", light: "#7e4752", dark: "#5c303d" },
        background: { paper: "#1b202e", default: "#1b202e" },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
export default config;
