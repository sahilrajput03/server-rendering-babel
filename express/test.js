const html = require("../target/C2");

const cars = [
  { id: 1, name: "Ford" },
  { id: 2, name: "Audi" },
  { id: 3, name: "BMW" },
  { id: 4, name: "Mercedes" },
];

console.log(html(cars));
