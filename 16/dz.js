console.log("---- Домашнє завдання 16 ----");

console.log("--- 1. Лічильник ---");

let index = 0;
while (index < 10) {
  index = index + 1;
  console.log(index);
}

console.log("--- 2. Сума чисел ---");

let index1 = 1;
let index2 = 0;
while (index1 <= 100) {
  index2 += index1;
  index1++;
}
console.log("Сума чисел від 1 до 100:", index2);

console.log("--- 3. Парні числа ---");

for (let a = 2; a <= 50; a += 2) {
  console.log(a);
}

console.log("--- 4. Сума ---");

const numbers = [5, 8, 12, 3, 7];
let b = 0;
for (let index4 = 0; index4 < numbers.length; index4++) {
  b += numbers[index4];
}
console.log(b);

console.log("--- 5. Найбільше число ---");

const numbers2 = [12, 45, 7, 89, 23];
let maxNumber = numbers2[0];
for (let index5 = 1; index5 < numbers2.length; index5++) {
  if (numbers2[index5] > maxNumber) {
    maxNumber = numbers2[index5];
  }
}
console.log(maxNumber);
