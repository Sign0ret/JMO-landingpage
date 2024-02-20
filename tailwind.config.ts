import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        myWhite: '#FFFFFF', // Define your custom color
        myBone: '#ccc',
        myBlack: '#000000',
        mySkin: '#ac9c8d',
        myBackground: '#000000',
        myGray: '#141414',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
