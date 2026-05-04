import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#060816'
      },
      boxShadow: {
        glow: '0 0 40px rgba(91, 99, 255, 0.35)'
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(circle at 20% 20%, rgba(98,92,255,0.36), transparent 45%), radial-gradient(circle at 80% 30%, rgba(0,216,255,0.28), transparent 40%), radial-gradient(circle at 50% 90%, rgba(255,0,199,0.2), transparent 45%)'
      }
    }
  },
  plugins: []
};

export default config;
