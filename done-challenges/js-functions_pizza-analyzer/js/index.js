console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = Math.round(pizzaGain);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = Math.round(pizzaGain);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (diameter1 / 2) ** 2 * Math.PI;
  const area2 = (diameter2 / 2) ** 2 * Math.PI;
  const pizzaGain = ((area2 - area1) / area1) * 100;
  return pizzaGain;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  const newWidth = (newSize / 24) * 100;
  pizzaElement.style.width = `${newWidth}px`;
}

// Task 3

function updateOutputColor(size1, size2) {
  const pizzaGain = calculatePizzaGain(size1, size2);
  if (pizzaGain < 0) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
