const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.boxShadow = '0 0 30px rgba(0,255,255,0.35)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.boxShadow = 'none';
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');

  if(window.scrollY > 50) {
    nav.style.background = 'rgba(0,0,0,0.75)';
  } else {
    nav.style.background = 'rgba(0,0,0,0.35)';
  }
});
