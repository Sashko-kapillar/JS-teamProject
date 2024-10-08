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

// JavaScript для обробки форми та показу попап-вікна
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    // Отримуємо значення полів форми
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Формуємо об'єкт даних для відправки
    const formData = {
      email: email,
      message: message,
    };

    // Надсилаємо дані на сервер за допомогою Fetch API
    fetch("https://example.com/submit", {
      // Замініть URL на свій серверний ендпоінт
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Якщо відправка успішна, показуємо попап
          document.getElementById("successPopup").style.display = "flex";
        } else {
          // Тут можна додати обробку помилки
          alert("There was an error sending your message. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again.");
      });
  });

// Закриття попап-вікна
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("successPopup").style.display = "none";
});

// Закриття попап-вікна при натисканні поза його межами
document
  .getElementById("successPopup")
  .addEventListener("click", function (event) {
    if (event.target === document.getElementById("successPopup")) {
      document.getElementById("successPopup").style.display = "none";
    }
  });
