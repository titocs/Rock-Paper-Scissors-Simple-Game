/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Barlow-Semi-Condensed': ['Barlow Semi Condensed', 'sans-serif']
      },
      colors: {
        'Scissors-Gradient':' hsl(39, 89%, 49%) to hsl(40, 84%, 53%)',
        'Paper-Gradient': 'hsl(230, 89%, 62%) to hsl(230, 89%, 65%)',
        'Rock-Gradient': 'hsl(349, 71%, 52%) to hsl(349, 70%, 56%)',
        'Lizard-Gradient': 'hsl(261, 73%, 60%) to hsl(261, 72%, 63%)',
        'Cyan': 'hsl(189, 59%, 53%) to hsl(189, 58%, 57%)',
        'Header-Outline': 'hsl(217, 16%, 45%)',
        'Dark-Text': 'hsl(229, 25%, 31%)',
        'Score-Text': 'hsl(229, 64%, 46%)'
      },
      animation: {
        winAnimation: 'Scaling 1s ease-in-out infinite'
      },
      keyframes: {
        Scaling: {
          '0%, 100%' : {
            transform: 'scale(2)'
          }
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};

