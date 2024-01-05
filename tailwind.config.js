module.exports = {
  content: ["./ruci/**/*.{html,js}"],
  theme: {


    
   
    extend: {
      // Extend the animation property
      animation: {
        'ping-once': 'ping 3s cubic-bezier(0, 0, 0.2, 1) 1', // Define 'ping-once' animation
      },
      // Define keyframes for the custom animation
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
