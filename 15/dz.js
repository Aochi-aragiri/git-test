console.log("---- Домашнє завдання 15 ----");

console.log("--- Завдання 1. Робота з масивом ---");

const fruits = ["apple", "orange"];
fruits.push("banana");
fruits.unshift("grape");
fruits.splice(2, 1, "peach");
console.log(fruits);

console.log("--- Завдання 2. Робота з рядками ---");

const name = "John";
const message = "Hello, my name is " + name + "!";
console.log(message);

console.log("--- Завдання 3. Умови ---");

const age = 16;
if (age < 18) {
  console.log("Too young");
} else {
  console.log("Welcome");
}

console.log("--- Завдання 4. Математичні операції ---");

const a = 10;
const b = 20;
const avg = (a + b) / 2;
console.log(avg); // 15

console.log("--- Завдання 5. Робота з масивами та рядками ---");

const numbers = [10, 20, 30, 40, 50];
numbers.pop();
numbers.shift();
const result = numbers.join("-");
console.log(result); // "20-30-40"

console.log("--- Завдання 6. Умови + логічні оператори ---");

const isStudent = false;
const Age = 18;
if (isStudent === true || Age >= 18) {
  console.log("Discount");
} else {
  console.log("No discount");
}

console.log("--- Завдання 7. Список студентів ---");
// Початковий масив студентів
const students = ["Olena", "Ivan", "Petro"];
// 1. Додай нового студента "Anna" в кінець масиву
students.push("Anna");
// 2. Додай студента "Oleh" на початок масиву
students.unshift("Oleg");
// 3. Видали "Ivan" з масиву за допомогою методу splice (він відрахований)
students.splice(2, 1);
// 4. Створи змінну group, де всі студенти будуть в одному рядку через кому
const group = students.join(", "); // "Oleh, Olena, Petro, Anna"
console.log(students); // ["Oleh", "Olena", "Petro", "Anna"]
console.log(group); // "Oleh, Olena, Petro, Anna"
