/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Import defaultTheme

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Core colors from your mood board
        primary: {
          DEFAULT: '#4ADE80', // Green from mood board
          light: '#86EFAC',
          dark: '#22C55E',
        },
        secondary: {
          DEFAULT: '#2563EB', // Blue from mood board
          light: '#60A5FA',
          dark: '#1D4ED8',
        },
        accent: {
          blue: '#0EA5E9',
          purple: '#8B5CF6',
          pink: '#F472B6',
        },
        // Dark mode colors
        dark: {
          bg: {
            primary: '#0F172A',    // Dark background from mood board
            secondary: '#1E293B',  // Card background from mood board
            tertiary: '#2D3748',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#E2E8F0',
            muted: '#94A3B8',
          },
          border: '#2D3748',
        },
        light: {
          bg: {
            primary: '#FFFFFF',
            secondary: '#F8FAFC',
            tertiary: '#F1F5F9',
          },
          text: {
            primary: '#0F172A',
            secondary: '#1E293B',
            muted: '#64748B',
          },
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans], // Use defaultTheme.fontFamily.sans
      },
    },
  },
  plugins: [],
};
