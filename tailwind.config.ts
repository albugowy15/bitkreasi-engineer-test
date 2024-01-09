import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          secondary: "hsl(var(--secondary-primary))",
          muted: "hsl(var(--muted-primary))",
        },
        greyscale: {
          DEFAULT: "hsl(var(--greyscale))",
          foreground: "hsl(var(--foreground-greyscale))",
          secondary: "hsl(var(--seconday-greyscale))",
          muted: "hsl(var(--muted-greyscale))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
