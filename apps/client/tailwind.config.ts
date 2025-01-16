import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    light: 'hsl(var(--background-light))',
                    medium: 'hsl(var(--background-medium))',
                },
                high: 'hsl(var(--text-high))',
                medium: 'hsl(var(--text-medium))',
                light: 'hsl(var(--text-light))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                '2xl': 'calc(var(--radius) + 4px)',
                xl: 'calc(var(--radius) + 2px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports

    plugins: [
        require('tailwindcss-animate'),
        require('tailwind-scrollbar-hide'),
        ({
            addUtilities,
        }: {
            addUtilities: (utilities: Record<string, unknown>) => void
        }) => {
            addUtilities({
                '.h1': {
                    '@apply text-h1 font-sans': {},
                },
                '.h2': {
                    '@apply text-h2 font-sans': {},
                },
                '.h3': {
                    '@apply text-h3 font-sans': {},
                },
                '.h4': {
                    '@apply text-h4 font-sans': {},
                },
                '.h5': {
                    '@apply text-h5 font-sans': {},
                },
                '.h6': {
                    '@apply text-h6 font-sans': {},
                },
                '.tiny': {
                    '@apply text-tiny font-sans': {},
                },
                '.body1': {
                    '@apply text-body1 font-looped': {},
                },
                '.body2': {
                    '@apply text-body2 font-looped': {},
                },
                '.body3': {
                    '@apply text-body3 font-looped': {},
                },
            })
        },
    ],
}
export default config
