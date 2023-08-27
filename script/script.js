// scripts.js
const btnToTop = document.getElementById('btnToTop');

// Mostrar o botão quando o usuário rolar para baixo
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnToTop.style.display = 'block';
  } else {
    btnToTop.style.display = 'none';
  }
});

// Rolar suavemente para o topo quando o botão for clicado
btnToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
