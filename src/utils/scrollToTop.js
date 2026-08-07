const scrollToTop = () => {
  const element = document.getElementById('question-top');

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default scrollToTop;
