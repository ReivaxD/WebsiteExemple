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
