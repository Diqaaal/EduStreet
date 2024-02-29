/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bluEdu: '#2A9DF4',
        bluEdu2: '#55B1F6',
        bluEdu3: '#7FC4F8',
        orangeEdu: '#FB8500',
        orangeEdu2: '#FC9D33',
        orangeEdu3: '#FDB666',
        dopeEdu: '#313131',
        dopeEdu2: '#414141',
      },
    },
  },
  plugins: [],
};
