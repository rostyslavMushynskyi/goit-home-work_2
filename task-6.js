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
} while (input !== null);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert(sum);
