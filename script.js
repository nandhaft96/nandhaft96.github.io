// Theme Toggle and Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;

  // Default to dark mode
  body.classList.add("dark");
  toggleBtn.textContent = "🌚";

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    toggleBtn.textContent = body.classList.contains("dark") ? "🌚" : "🌞";
  });

  // Typing effect
  const nameEl = document.querySelector("h1 .highlight");
  const nameText = "Nandha Kumar";
  let i = 0;
  function typeWriter() {
    if (i < nameText.length) {
      nameEl.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 120);
    }
  }
  nameEl.textContent = "";
  typeWriter();
});
