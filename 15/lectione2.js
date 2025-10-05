// --- Парсинг чисел / рядків
console.log(parseInt("John 1")); // NaN
console.log(parseInt("1 John")); // 1
console.log(typeof NaN); // "number"
console.log(parseFloat("1.01 John")); // 1.01
console.log(parseFloat("1,97")); // 1  (parseFloat зупиняється на комі)
console.log(Number("1,97")); // NaN

// Якщо хочеш коректно розпарсити десяткове з комою:
console.log(parseFloat("1,97".replace(",", "."))); // 1.97
console.log(Number("1,97".replace(",", "."))); // 1.97

const fullName = "1.01 John";
const nameParts = fullName.split(" ");
const numStr = nameParts[0];
const num = Number(numStr);
console.log(num); // 1.01

// --- Boolean -> String
const bool = true;
console.log(bool.toString()); // "true"

const boolU = undefined;
console.log(String(boolU)); // "undefined"

// --- Array -> String / join
const dataArr = [1, 2, 3];
console.log(dataArr.join()); // "1,2,3"

// --- Object -> JSON
const dataObj = { test: "value" };
console.log(String(dataObj)); // "[object Object]"
const dataStr = JSON.stringify(dataObj);
console.log(dataStr); // '{"test":"value"}'
console.log(JSON.parse(dataStr)); // { test: 'value' }

// --- Масиви: операції
let arrNums = [10, 50, 120];
arrNums.push(1);
console.log(arrNums); // [10, 50, 120, 1]

const arr1 = [10, 50, 120];
const arr2 = ["John", "Jane", "Elizabeth"];
const newArr = arr1.concat(arr2);

console.log(arr1); // [10,50,120]
console.log(newArr); // [10,50,120,"John","Jane","Elizabeth"]

const slicedArr = newArr.slice(1, 4);
console.log(slicedArr);

console.log(newArr.includes("Jane")); // true
console.log(newArr.includes("Alex")); // false

const reversedArray = newArr.slice().reverse(); // slice() -> робимо копію, щоб не змінити оригінал
console.log(newArr); // оригінал лишився
console.log(reversedArray);

// --- If / else if / else: правильна конструкція
const isSignedIn = true;

if (isSignedIn === true) {
  console.log("You are logged in");
} else {
  console.log("You are not logged in");
}

const a = 1;
const b = 2;
const c = 1;

if (a < b) {
  console.log("a < b");
} else if (a === 1) {
  console.log("a === 1");
} else if (b === 2) {
  console.log("b === 2");
} else {
  console.log("Hello!");
}

// --- Перетворення в Boolean
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(true)); // true

if (a < b && a === c) {
  console.log("Hoooray!");
}

if (a === 1 || b === 3) {
  console.log("OR");
}
