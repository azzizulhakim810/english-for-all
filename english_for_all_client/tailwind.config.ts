import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1580px",
      },
      colors: {
        primary: "#330066",
        gray_: "#404040",
        light_gray: "#6B6B6B",
        orange_: "#FB6D3A",
        brand_black: "#181818",
        light_primary: "#F0E0FF",
        light_black: "#282938",
        bg_color: "#F5F6F8",
      },
    },
  },
};
export default config;
