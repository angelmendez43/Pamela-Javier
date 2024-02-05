document.addEventListener('DOMContentLoaded', () => {
    const fallElements = document.querySelectorAll('.fall-animation');
    fallElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate');
      }, index * 500);
    });
  });
  
  window.addEventListener('scroll', () => {
    const fallElements = document.querySelectorAll('.fall-animation');
    fallElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        el.style.animationPlayState = 'running';
      }
    });
  });
  