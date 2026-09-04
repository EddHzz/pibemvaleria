// ============================================
// CONTADOR REGRESSIVO
// Primeiro dia do evento: 10/09 às 19h30 (Pr. Davidson Freitas)
// Formato: "AAAA-MM-DDTHH:MM:SS"
// ============================================
const DATA_EVENTO = new Date("2026-09-10T19:30:00");

function atualizarContador() {
  const agora = new Date();
  const diff = DATA_EVENTO - agora;

  const els = {
    dias: document.getElementById("cd-dias"),
    horas: document.getElementById("cd-horas"),
    min: document.getElementById("cd-min"),
    seg: document.getElementById("cd-seg"),
  };

  if (!els.dias) return; // elementos não existem nesta página

  if (diff <= 0) {
    els.dias.textContent = "00";
    els.horas.textContent = "00";
    els.min.textContent = "00";
    els.seg.textContent = "00";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const seg = Math.floor((diff / 1000) % 60);

  els.dias.textContent = String(dias).padStart(2, "0");
  els.horas.textContent = String(horas).padStart(2, "0");
  els.min.textContent = String(min).padStart(2, "0");
  els.seg.textContent = String(seg).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);

// ============================================
// MENU MOBILE (hamburger)
// ============================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const aberto = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  // Fecha o menu ao clicar em um link (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
