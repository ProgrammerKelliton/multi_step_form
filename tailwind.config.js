/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": " hsl(231, 11%, 63%)",
        "light-gray": " hsl(229, 24%, 87%)",
      },
      backgroundImage: {
        "side-bar-desktop": "url('/images/sideBarDesktop.svg')",
      },
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
  },
  plugins: [],
};
