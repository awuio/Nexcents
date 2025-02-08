/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"var(--primary)",
        neutralwhite:"var(--neutral-white)",
        neutral_DGrey: "var(--neutral-D_Grey)",
        neutralL_Grey: "var(--neutral-L_Grey)",
        neutral_Grey: "var(--neutral-Grey)",
        neutral_Black: "var(--neutral-Black)",
        neutral_Sliver: "var(--neutral-sliver)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
