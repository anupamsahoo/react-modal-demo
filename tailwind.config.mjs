/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // 👇 add your library build files here
    "./node_modules/@anupamsahoo/react-modal/dist/**/*.{js,mjs,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
