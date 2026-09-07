const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");

function closeMenu() {
  menu.classList.remove("is-open");
  menuToggle.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

function openMenu() {
  menu.classList.add("is-open");
  menuToggle.classList.add("is-active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.contains("is-open");

  if (isOpen) {
    closeMenu();
    return;
  }

  openMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!menu.classList.contains("is-open")) {
    return;
  }

  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -30px 0px",
  }
);

revealItems.forEach((item) => observer.observe(item));

// Contador do aniversário de 43 anos
const DATA_EVENTO = new Date("2026-09-10T19:30:00-03:00");
function atualizarContador(){
  const ids={dias:"cd-dias",horas:"cd-horas",min:"cd-min",seg:"cd-seg"};
  const el=Object.fromEntries(Object.entries(ids).map(([k,id])=>[k,document.getElementById(id)]));
  if(!el.dias)return;
  const diff=Math.max(0,DATA_EVENTO-new Date());
  const valores={dias:Math.floor(diff/86400000),horas:Math.floor(diff/3600000)%24,min:Math.floor(diff/60000)%60,seg:Math.floor(diff/1000)%60};
  Object.keys(valores).forEach(k=>el[k].textContent=String(valores[k]).padStart(2,"0"));
}
atualizarContador();
setInterval(atualizarContador,1000);
