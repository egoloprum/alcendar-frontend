/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/features/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#F87060', // coral
        secondary: '#F0F66E', // soft yellow
        ghost: '#F0F8EA', // very light mint
        disabled: '#696D7D', // muted gray-blue
        background: '#fef3c7', // bg-amber-100

        textPrimary: '#1F2937', // dark neutral (good contrast)
        textSecondary: '#4B5563', // muted text
        textMuted: '#9CA3AF',

        border: '#E5E7EB', // soft neutral border
        borderStrong: '#D1D5DB',

        card: '#F0F8EA', // ghost works perfectly for cards
        notification: '#F87060' // reuse primary for alerts
      }
    }
  },
  plugins: []
}
