// Елемент кнопки для перемикання теми
const toggleThemeBtn = document.getElementById("themeToggle");

// Функція перемикання теми
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Оновлює текст на кнопці залежно від активної теми
  if (document.body.classList.contains("dark-theme")) {
    toggleThemeBtn.textContent = "Switch to Light Theme";
  } else {
    toggleThemeBtn.textContent = "Switch to Dark Theme";
  }
});
