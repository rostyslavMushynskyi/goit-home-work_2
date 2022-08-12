let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число");
  if (isNaN(input)) {
    alert("Було написано не число, спробуйте ще раз");
    continue;
  }

  total = numbers.push(Number(input));
  console.log(numbers);
} while (input !== null);

alert(numbers.join(","));
