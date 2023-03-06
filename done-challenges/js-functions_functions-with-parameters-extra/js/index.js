console.clear();

/*
1: The function calls below do not work properly yet. Make the function
   printSquare log the square of the parameter to the console.
   The formula is: square = number * number
*/

function printSquare(number1, number2) {
  const square = number1 * number2;
  return square;
}

console.log(printSquare(3, 5));

/*
2: We want to use a function which accepts the radius of a circle as a parameter and logs
   the circumference to the console. The function does not exist yet.
   The formula is: circumference = 2 * Pi * radius
*/

// Uncomment the following function calls and implement the function printCircumference

// printCircumference(4);
// printCircumference(6);

function circumference(radius) {
  const circ = 2 * radius * Math.PI;
  return circ;
}
console.log(circumference(5));

/*




3: We want to use a function which accepts the width and length of a rectangle
   and prints the following text to the console: "The area of the rectangle is ?".
   The function should print the correct area instead of the question mark "?".
   The function does not exist yet.
   The formula is: area = width * length
*/

// Uncomment the following function calls and implement the function printRectangleArea

// printRectangleArea(5, 7);
// printRectangleArea(3, 4));

function areaOfRectangle(width, length) {
  const area = width * length;
  return " The area of the rectangle is " + area;
}
console.log(areaOfRectangle(5, 7));
