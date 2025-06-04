// Theme Toggle + Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;

  // Default dark
  body.classList.add("dark");

  toggleBtn.textContent = "🌚";

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "🌚" : "🌞";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Typing Effect
  const nameEl = document.querySelector("h1 .highlight");
  const nameText = "Nandha Kumar";
  let i = 0;

  function typeWriter() {
    if (i < nameText.length) {
      nameEl.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  nameEl.textContent = "";
  typeWriter();
});
