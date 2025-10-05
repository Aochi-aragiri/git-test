const data1 = 1;
const data2 = "Hello, world";
const data3 = null;
const data4 = 1;
const data5 = false;
const data6 = [];
const data7 = {};
const data8 = [1];
const data9 = ["test"];
const data10 = function () {};
const data11 = {};
const data12 = 1;

console.log(typeof data1);
console.log(typeof data2);
console.log(typeof data3);
console.log(typeof data4);
console.log(typeof data5);
console.log(typeof data6);
console.log(typeof data7);
console.log(typeof data8);
console.log(typeof data9);
console.log(typeof data10);
console.log(Array.isArray(data11));
console.log(typeof typeof data12);

console.log(1 === 1);
console.log(1 === 0);
console.log("test" === "test");
console.log("test" === "test1");
console.log(null === null);
console.log(undefined === undefined);
console.log(false === false);
console.log({} === {});
const obj1 = {};
const obj2 = {};
console.log(obj1 === obj2);
const obj3 = {};
const obj4 = obj3;
console.log(obj3 === obj4);

const obj5 = {};
const obj6 = obj5;

obj5.username = "John";
obj6.username = "Jane";

console.log(obj5);
console.log(obj6);

console.log(obj5) === obj6;
