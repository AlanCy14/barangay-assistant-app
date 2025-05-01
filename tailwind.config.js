/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Scan all relevant files within the app directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include if you also use the pages directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include your components folder
    // Add any other directories containing templates or components here
  ],
  theme: {
    extend: {
      // You can customize your theme here
    },
  },
  plugins: [],
}