//Numbers

console.log(1 + 1);
console.log(1 - 1);
console.log(3 * 4);
console.log(1 + 2 * 2);
console.log((1 + 2) * 2);
console.log(15 % 2);
console.log(14 % 2); // Остача
console.log(4 ** 4);
console.log(4 ** 2); // Степінь

// Conditions

console.log(!false);
console.log(!true);
console.log(1 !== 1);
console.log(!(1 === 1));
console.log(1 > 0);
console.log(1 >= 1);
console.log(0 < 1);
console.log(1 <= 1);

console.log(1 == 1);
console.log(1 == "1");
console.log(1 == " 1 ");
console.log(1 === "1");
console.log(0 == false);
console.log(1 == true);
console.log([] == "[]");
console.log([] == []);

// Strings

const name = "John" + " " + "Doe"; //Concatenation
console.log(name);

const info = ["Jhon", "Doe"];
const fullName = info.join(" ");
console.log(fullName);
const testStr = fullName.replace("Junior" / "Senior");
console.log(testStr);

// undefined не має операцій

// Objects

const user = {
  firstName: "John",
};

user.lastName = "Doe";
delete user.lastName;

userage = 30;

console.log(userage);

// Array

const students = ["Pablo", "Andrew", "Katya", "Jora"];

students.push("Oleg"); // додає новий масив (або масиви) у кінець рядку
students.unshift("Anton"); // додає новий масив (або масиви) у початок рядку
students.shift(); //видаляє останніх в масиві
students.pop(); //видаляє перших в масиві
students.splice(1, 1); //array.splice(start, deleteCount, item1, item2, ...)
//start — індекс, з якого починаємо зміни
//deleteCount — скільки елементів видалити
//item1, item2… — що додати на місце видалених
console.log(students);

//

const test = 100;
const testStr = test.toString();
const money = testStr.replaceAll("0", "1");
console.log(testStr);
console.log(money);
const num = Number(money); // const num = +money; const num = parseInt(money);
consol.log(num);
console.log(money + 5);
console.log(typeof num);
