const logo = document.getElementById('logo');
const sideMenu = document.getElementById('side-menu');

logo.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

const typedTitleElement = document.getElementById("typed-title");
let titleIndex = 0;

function typeTitle() {
  if (!typedTitleElement) return;
  
  const typedTitleText = typedTitleElement.getAttribute('data-text');
  if (!typedTitleText) return;
  
  function type() {
    if (titleIndex < typedTitleText.length) {
      typedTitleElement.textContent += typedTitleText.charAt(titleIndex);
      titleIndex++;
      setTimeout(type, 150);
    }
  }
  type();
}

window.addEventListener("load", typeTitle);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

const downArrow = document.getElementById('down-arrow');
if (downArrow) {
  setTimeout(() => {
    downArrow.style.display = 'block';
  }, 3500);

  downArrow.addEventListener('click', () => {
    const target = document.querySelector('.carreras-header');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function mostrarFormularioCarreira() {
const overlayFormCareer = document.getElementById("overlay-form-career");
if (overlayFormCareer) {
overlayFormCareer.style.visibility = 'visible';
overlayFormCareer.style.opacity = '1';
document.body.style.overflow = 'hidden';
}
}

function fecharFormularioCarreira() {
const overlayFormCareer = document.getElementById("overlay-form-career");
if (overlayFormCareer) {
overlayFormCareer.style.visibility = 'hidden';
overlayFormCareer.style.opacity = '0';
document.body.style.overflow = '';
}
}

document.getElementById('overlay-form-career').addEventListener('click', function(e) {
if (e.target === this) {
fecharFormularioCarreira();
}
});