const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 17) {
    return {
      text: 'Good Evening',
      emoji: '🌙',
    };
  }

  if (hour >= 12) {
    return {
      text: 'Good Afternoon',
      emoji: '☀️ ',
    };
  }

  return {
    text: 'Good Morning',
    emoji: '🌅 ',
  };
};

export default getGreeting;
