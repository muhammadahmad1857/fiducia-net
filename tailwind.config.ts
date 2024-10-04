import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add this to support pausing on hover
      animationPlayState: {
        pause: "paused",
      },
      animation: {
        // "slide-up": "slideUp 20s linear infinite",
        "continuous-scroll": "scrollUp 20s linear infinite",
        "slide-down": "slideDown 15s linear infinite",
      },
      keyframes: {
        // slideUp: {
        //   "0%": { transform: "translateY(100%)" },
        //   "100%": { transform: "translateY(-100%)" },
        // },
        scrollUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" }, // Scrolls up to the end of the container
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      screens: {
        sm: "640px",
        md: "850px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        main: {
          TEXT: "#3393dc",
          light: "#1f77b4",
          dark: "#223a4a",
        },
        bgColor: "#060B0E",
      },
    },
  },
  plugins: [],
};
export default config;
