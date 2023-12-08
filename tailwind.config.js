/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
      width: {
        closed: "93px",
        opened: "310px",
        navopen: "calc(100% - 310px)",
        navclosed: "calc(100% - 93px)",
      },
      backgroundColor: {
        mirage: {
          DEFAULT: "#161C24",
          500: "#161C24",
        },
        aquasqueeze: {
          DEFAULT: "#e9f7f2",
        },
        swansdown: {
          DEFAULT: "#D6F1E8",
        },
        blackhaze: {
          DEFAULT: "#f6f7f8",
        },

        mystic: {
          DEFAULT: "#e4ecee",
        },
        ebonyclay: {
          DEFAULT: "#21313c",
        },
        papagreen: {
          DEFAULT: "#1e4141",
        },
        papagreend: {
          DEFAULT: "#21373d",
        },
        outerspace: {
          DEFAULT: "#2c3641",
        },
        alabaster: {
          DEFAULT: "#fcfcfc",
        },
      },
      boxShadow: {
        side: "0 0 1200px 1200px rgba(33, 49, 60, 0.7)",
      },
      textColor: {
        jade: {
          DEFAULT: "#00a76f",
        },
        palesky: {
          DEFAULT: "#637381",
        },
        bali: {
          DEFAULT: "#919eab",
        },
      },
      borderColor: {
        jade: {
          DEFAULT: "#00a76f",
        },
        blackhaze: {
          DEFAULT: "#f6f7f8",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
