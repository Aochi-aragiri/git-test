const students = ["Катя", "Андрій", "Павло"]; // const students = ['Катя', 'Андрій', 'Павло', 1, true, null, false];
console.log(students);
console.log(students[1]);

students[1] = "Евтанахій";
students[3] = "Ігор";
students[10] = "Лада";

console.log(students);
console.log(students[3]); // масив
console.log(students.at(-1)); // шукає останній елемент. -2 - предостанній
