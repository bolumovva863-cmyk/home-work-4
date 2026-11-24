// Задание №1
let names = ["Эллада", "Солиха", "Ирина", "Алина", "Диана"];
console.log(names);
console.log(names[0], names[4]);
names.push("Солиха");
names.shift();
console.log(names.length);

// Задание №2
let list = ["хлеб", "молоко", "яйца", "сыр", "чай"];

list.unshift("сок");
list.pop();
list[2] = "мясо";

console.log(list.includes("хлеб"));
console.log(list);

// Задание №3
const grades = [5, 4, 3, 5, 4, 2, 5];
// 1
console.log(grades.length);
// 2
console.log(grades[0]);
console.log(grades[grades.length - 1]);
// 3
grades.push(5);
// 4
grades.pop();
// 5
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}

// Задание №4
const numbers = [10, 25, 30, 45, 50, 65, 80]; //[span_1](start_span)[span_1](end_span)
// 1
const mapRes = numbers.map(x => x * 2);
console.log(mapRes);
// 2
const filterRes = numbers.filter(x => x > 40);
console.log(filterRes);
// 3
const findRes = numbers.find(x => x > 50);
console.log(findRes);
// 4
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);

// Задание №5
const products = ["Ноутбук", "Мышка", "Клавиатура", "Монитор", "Наушники", "Принтер"];
console.log(products.slice(0, 3));
products.splice(3, 1)
products.splice(2, 0, "Веб-камера");
console.log(products);

// Задание №6
let scores = [85, 45, 78, 60, 32, 95, 100, 55];
let r1 = scores.filter(function(x) {
  return x >= 60;
});
console.log(r1);
let r2 = scores.map(function(x) {
  let n = x + 5;
  if (n > 100) n = 100;
  return n;
});
console.log(r2);
let r3 = scores.find(function(x) {
  return x < 50;
});
console.log(r3);
let r4 = scores.reduce(function(a, b) {
  return a + b;
}, 0) / scores.length;
console.log(r4);

// Задание №7
let student = {
  name: "Алия",
  age: 19,
  group: "ИТ-24",
  profession: "Программирование"
};
console.log(student.name, student.group);
student.age = 20;
student.email = "aliya@mail.ru";
delete student.profession;
console.log(student);

// Задание №8
const car = {
  brand: 'BMW',
  model: 'X5',
  year: 2021,
  price: 40000
}
console.log(car.brand, car.model)
car.price = 38000
car.color = 'white'
car.getInfo = function () {
  console.log(this.brand + ' ' + this.model + ' ' + this.year + ' ' + this.color + ' ' + this.price)
}
car.getInfo()

// Задание №9
const studentInfo = {
  name: "Алексей",
  group: "ВР-1-26",
  grades: [5, 4, 5, 3, 4]
};
// 1
console.log(studentInfo.name, studentInfo.group);
// 2
studentInfo.grades.push(5);
// 3
studentInfo.getAverage = function () {
  let s = 0;
  for (let x of this.grades) s += x;
  return s / this.grades.length;
};
// 4
studentInfo.getStatus = function () {
  if (this.getAverage() >= 3) {
    return "Успевает";
  }
  return "Не успевает";
};
// 5
console.log(studentInfo);
console.log(studentInfo.getAverage());
console.log(studentInfo.getStatus());