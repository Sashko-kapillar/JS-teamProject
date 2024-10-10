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

// JavaScript для FAQ секції
document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const faqAnswer = button.parentElement.nextElementSibling;

    // Перемикаємо видимість відповіді
    faqAnswer.style.maxHeight = faqAnswer.style.maxHeight
      ? null
      : faqAnswer.scrollHeight + "px";

    // Змінюємо текст кнопки
    button.textContent = button.textContent === "+" ? "-" : "+";
  });
});

const form = document.getElementById("contactForm");

// Відправка форми та обробка відповіді сервера
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  axios
    .post("https://example.com/submit", formData)
    .then((response) => {
      if (response.data.success) {
        // Показуємо успішний попап
        document.getElementById("successPopup").style.display = "flex";
      } else {
        // Показуємо попап з помилкою
        document.getElementById("errorPopup").style.display = "flex";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Показуємо попап з помилкою
      document.getElementById("errorPopup").style.display = "flex";
    });
});

// Закриття попап-вікон
document.querySelectorAll(".close-btn").forEach((button) => {
  button.addEventListener("click", function () {
    button.closest(".popup").style.display = "none";
  });
});

// Закриття попап-вікна при натисканні поза його межами
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

// Елементи для відкриття та закриття модального меню
const menuToggle = document.getElementById("menuToggle");
const modalMenu = document.getElementById("modalMenu");
const closeMenu = document.getElementById("closeMenu");

// Відкриття меню при натисканні на кнопку гамбургер-меню
menuToggle.addEventListener("click", () => {
  modalMenu.classList.add("active");
});

// Закриття меню при натисканні на хрестик
closeMenu.addEventListener("click", () => {
  modalMenu.classList.remove("active");
});

// Закриття меню при натисканні поза межами меню
modalMenu.addEventListener("click", (event) => {
  if (event.target === modalMenu) {
    modalMenu.classList.remove("active");
  }
});
