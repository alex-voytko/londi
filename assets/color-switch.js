const headings = document.querySelectorAll('.card__heading');
const prices = document.querySelectorAll('.price');
const colors = ['#0019ff', '#FF4301', '#6BFF4F'];

// Generate random color for text
const randomTextColorIndex = Math.floor(Math.random() * 2);
const randomTextColor = colors[randomTextColorIndex];

// Generate random color for hover
let randomHoverColorIndex = Math.floor(Math.random() * colors.length);
let randomHoverColor = colors[randomHoverColorIndex];
while (randomHoverColor === randomTextColor) {
  randomHoverColorIndex = Math.floor(Math.random() * colors.length);
  randomHoverColor = colors[randomHoverColorIndex];
}
document.documentElement.style.setProperty('--random-hover-color', randomHoverColor);
document.documentElement.style.setProperty('--random-color', randomTextColor);

// Знайти всі елементи з класом "product__accordion"
const accordions = document.querySelectorAll('.product__accordion');

// Додати обробник подій для кожного елемента
accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    // Забрати атрибут "open" з усіх інших елементів
    accordions.forEach((otherAccordion) => {
      if (otherAccordion !== accordion) {
        otherAccordion.querySelector('details').removeAttribute('open');
      }
    });
  });
});