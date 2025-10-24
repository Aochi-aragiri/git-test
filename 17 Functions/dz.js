console.log("---- Домашнє завдання 17 ----");

console.log("--- Завдання 1 ---");

function greetUser(name) {
  console.log(`Привіт, ${name}! Радий тебе бачити!`);
}
greetUser("Oleg");

console.log("--- Завдання 2 ---");

function square(number) {
  console.log(number ** 2);
}
square(3);

console.log("--- Завдання 3 ---");

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(5));

console.log("--- Завдання 4 ---");

function getFullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}
getFullName("Oleg", "Gapuk");

console.log("--- Завдання 5 ---");

function calculateArea(width, height) {
  console.log(width * height);
}
calculateArea(5, 3);
calculateArea(9, 20);

console.log("--- Завдання 6 ---");

function canDrive(age) {
  if (age >= 18) {
    console.log("Ти можеш водити");
  } else {
    console.log("Ти ще занадто молодий");
  }
}
canDrive(17);
canDrive(71);

console.log("--- Завдання 7 ---");

function grade(score) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 75 && score <= 100) {
    console.log("B");
  } else if (score >= 60 && score <= 100) {
    console.log("C");
  } else if (score < 60 && score <= 100 && score >= 0) {
    console.log("F");
  } else {
    console.log("The grade is not valid");
  }
}
grade(100);
grade(90);
grade(78);
grade(61);
grade(50);
grade(-3);
grade(1000);

console.log("--- Завдання 8 ---");

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index])) {
      count++;
    }
  }
  console.log(count);
}
countVowels("Hello world");
countVowels("Oleg Gapuk UwU");

console.log("--- Завдання 9 ---");

function reverseString(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
  return reversed;
}
reverseString("gelO");
reverseString("Andrew");
reverseString("vloPa");
