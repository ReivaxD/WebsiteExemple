const bouton = document.getElementById("btn");
const themeToggle = document.getElementById("theme-toggle");

bouton.addEventListener("click", () => {
  bouton.textContent = "Bravo 🎉 !";
  alert("Tu as cliqué sur le bouton !");
});

// --- GESTION DU MODE SOMBRE ---
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// --- ANIMATION D'ENTRÉE ---
window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("header, .hero, section, footer");
  elements.forEach((el, index) => {
    el.classList.add("fade-in");
    el.style.animationDelay = `${index * 0.3}s`;
  });
});
