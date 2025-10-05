// Objects
const person = {
  name: "John",
  surname: "Doe",
  eyeColor: "grey",
  sex: "no experiense",
  age: 103,
  // phone: 12345,
};
console.log(person);

person.name = "Jane";
person.sex = "Female";
person.favoriteColor = "Red";

// delete person.eyeColor;

person.favoriteColor = null; // undefined краще не юзати, бо не будемо розуміти, чи є ця властивість у об'єкта, чи нема
console.log(person.username);

console.log(person);
