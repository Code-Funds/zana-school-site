import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // School brand colors - Deep navy and gold
        primary: {
          50: 'hsl(220, 70%, 97%)',
          100: 'hsl(220, 70%, 92%)',
          200: 'hsl(220, 70%, 83%)',
          300: 'hsl(220, 70%, 70%)',
          400: 'hsl(220, 70%, 55%)',
          500: 'hsl(220, 70%, 45%)',
          600: 'hsl(220, 70%, 35%)',
          700: 'hsl(220, 70%, 28%)',
          800: 'hsl(220, 70%, 22%)',
          900: 'hsl(220, 70%, 15%)',
          950: 'hsl(220, 70%, 10%)',
        },
        accent: {
          50: 'hsl(45, 90%, 95%)',
          100: 'hsl(45, 90%, 88%)',
          200: 'hsl(45, 90%, 75%)',
          300: 'hsl(45, 90%, 62%)',
          400: 'hsl(45, 90%, 51%)',
          500: 'hsl(45, 90%, 45%)',
          600: 'hsl(45, 90%, 38%)',
          700: 'hsl(45, 90%, 30%)',
          800: 'hsl(45, 90%, 25%)',
          900: 'hsl(45, 90%, 20%)',
        },
        border: 'hsl(220, 13%, 91%)',
        input: 'hsl(220, 13%, 91%)',
        ring: 'hsl(220, 70%, 45%)',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(220, 10%, 15%)',
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(220, 10%, 15%)',
        },
        muted: {
          DEFAULT: 'hsl(220, 13%, 96%)',
          foreground: 'hsl(220, 10%, 40%)',
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(220, 10%, 15%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84%, 60%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(220, 13%, 96%)',
          foreground: 'hsl(220, 10%, 15%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
