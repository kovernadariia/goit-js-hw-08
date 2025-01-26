// Функція для генерації випадкового кольору в форматі hex
function generateRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Отримуємо елементи кнопки та span для оновлення кольору
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо обробник події на клік по кнопці
button.addEventListener('click', () => {
  // Генеруємо випадковий hex колір
  const randomColor = generateRandomHexColor();
  
  // Задаємо цей колір як фон для тіла сторінки
  document.body.style.backgroundColor = randomColor;
  
  // Оновлюємо текст в span з класом color
  colorSpan.textContent = randomColor;
});
