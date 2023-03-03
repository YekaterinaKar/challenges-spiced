console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for (const language of programmingLanguages) {
  const li = document.createElement("li");
  ol.append(li);
  li.textContent = language;
}

// --v-- write/change code here --v--

// --^-- write/change code here --^--
