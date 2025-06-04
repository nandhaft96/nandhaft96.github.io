// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;
  const current = localStorage.getItem("theme");

  if (current === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "🌚";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      toggleBtn.textContent = "🌚";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌞";
      localStorage.setItem("theme", "light");
    }
  });
});
