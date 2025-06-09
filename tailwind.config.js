/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './memory-bank/**/*.{js,ts,jsx,tsx,md}', // Include memory-bank if it contains any Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
      },
      backgroundColor: {
        page: 'rgb(var(--color-background))',
        card: 'rgb(var(--color-card))',
      },
      textColor: {
        page: 'rgb(var(--color-foreground))',
        card: 'rgb(var(--color-card-foreground))',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
      gradientColorStops: {
        'gradient-start': 'var(--color-gradient-start)',
        'gradient-end': 'var(--color-gradient-end)',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.1))',
        DEFAULT: '0 1px 3px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.1)), 0 1px 2px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.06))',
        md: '0 4px 6px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.1)), 0 2px 4px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.06))',
        lg: '0 10px 15px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.1)), 0 4px 6px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.05))',
        xl: '0 20px 25px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.1)), 0 10px 10px rgba(var(--color-shadow), calc(var(--shadow-strength) * 0.04))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
