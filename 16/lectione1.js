// const username = "John";
// const isLoggedIn = username === "John" ? true : false;
// const isLoggedIn = username === "John" ? true ; (інша умова і так буде дорівнювати false)
// let isLoggedIn = false;

/* if (username === "John") {
  isLoggedIn = true;
} else {
  isLoggedIn = false;
} */

//const newUsername = username || 'default-user'; Повертає default user: null, undefined, 0, пустий рядок
// let newUsername;
// Boolean(username) === false
/* if (!username) {
  newUsername = "default-user";
} else {
  newUsername = username;
} */

// const newUsername = username ?? "default-user"; // Повертає default user тільки якщо username = 0 null undefined
/* if (username === null || username === undefined) {
  newUsername = "default-user";
} else {
  newUsername = username;
} */
// console.log(newUsername);

// Loops

/* let index = 0;
const count = 1_000_000_000;
while (index < 10) {
  // index = index + 1;
  // index = += 1;
  index++; // index-- index-=1 index*=2 index/=2
  if (index === 1000000) {
    console.log("index");
  }
} */

/* const students = ["Anjie", "Andrew", "Sarah"];

let index = 0;
while (index < students.length) {
  const student = students[index];
  if (student === "Anjie") {
    console.log(student + " До дошки");
  }

  index++;
} */

/* const student0 = students[0];
if (student0 === "Andrew") {
  console.log(student0 + " До дошки");
}

const student1 = students[1];
if (student0 === "Andrew") {
  console.log(student0 + " До дошки");
}

const student2 = students[2];
if (student0 === "Andrew") {
  console.log(student0 + " До дошки");
}
 */

/* const students = [
  {
    name: "Anjie",
    avgMark: 7,
  },
  {
    name: "John",
    avgMark: 6,
  },
  {
    name: "Andrew",
    avgMark: 10,
  },
  {
    name: "Pablo",
    avgMark: 12,
  },
];
 */
/* let index = 0;
while (index < students.length) {
  const student = students[index];
  if (student.avgMark < 8) {
    console.log(student.name + " До дошки");
    break;
  }
  index++;
} */

/* let index = 0;
let targetStudent = students[0];

while (index < students.length) {
  const student = students[index];
  if (student.avgMark < targetStudent.avgMark) {
    targetStudent = student;
  }
  index++;
}
console.log(targetStudent.name + " До дошки");
 */

/* const students = [
  {
    name: "Anjie",
    avgMark: 7,
  },
  {
    name: "John",
    avgMark: 6,
  },
  {
    name: "Andrew",
    avgMark: 10,
  },
  {
    name: "Pablo",
    avgMark: 12,
  },
];

let index = 0;
let targetStudent = students[0]; */

//do {
//console.log("iteration");
/* const student = students[index];
  if (student.avgMark < targetStudent.avgMark) {
    targetStudent = student;
  } */
//  index++;
//} while (index < students.length);
// console.log(targetStudent.name + " До дошки");

/* const students = [
  {
    name: "Anjie",
    avgMark: 7,
  },
  {
    name: "John",
    avgMark: 6,
  },
  {
    name: "Andrew",
    avgMark: 10,
  },
  {
    name: "Pablo",
    avgMark: 12,
  },
]; */

/* for (let index = 0; index < students.length; index++) {
  const student = students[index];
  if (student.avgMark < targetStudent.avgMark) {
    targetStudent = student;
  }
}

console.log(targetStudent);
 */

/* for (const student of students) {
  console.log(student);
}
 */

/* const student = {
  name: "John",
  avgMark: 10,
  grade: 7,
}; */

/* for (const key in student) {
  const value = student[key];
  console.log(key, value);
} */

// const key = "name";

// const value = student.name;
// const value = student[key];
// console.log(value);
