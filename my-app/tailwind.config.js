/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // ← ここも重要（srcにある場合）
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

