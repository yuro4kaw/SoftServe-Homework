// Homework 5

//*********************** task 1 ***********************

let mentor = {
  course: "Js",
  duration: 65,
  direction: "web-dev",
  age: 44,
};
function propsCount(mentor) {
  return Object.keys(mentor).length;
}
propsCount(mentor);

//*********************** task 2 ***********************

let obj = {
  width: 35,
  height: 25,
  depth: 10,
  weight: 5,
  price: 500,
};
function showProps(obj) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
}
showProps(obj);

//*********************** task 3 ***********************

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return Person.name + "" + Person.surname;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    this.midleName = midleName;
    return this.name + " " + this.surname + " " + this.midleName;
  }
  showCourse() {
    let yr = new Date().getFullYear();
    let currCourse = yr - this.year;

    if (currCourse <= 6 && currCourse >= 1) {
      return currCourse;
    } else {
      console.log("Error! Wrong year.");
    }
  }
}
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

//*********************** task 4 ***********************

const workers = [];

class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    return this.dayRate * this.workingDays;
  }

  showSalaryWithExperience() {
    return this.showSalary() * this.#experience;
  }

  get showExp() {
    return this.#experience;
  }

  set setExp(value) {
    this.#experience = value;
  }

  workerNameAndSalary() {
    return this.fullName + " : " + this.showSalaryWithExperience();
  }
}

// !!!!   Приклад вводу в консоль !!!!
let worker1 = new Worker("Michael Thor", 20, 23);
worker1.setExp = 1.5;
worker1.showSalaryWithExperience();
workers.push(worker1.workerNameAndSalary());
let worker2 = new Worker("Peter Kemero", 2044, 23);
worker2.setExp = 6.5;
worker2.showSalaryWithExperience();
workers.push(worker2.workerNameAndSalary());
let worker3 = new Worker("John Johnson", 4, 22);
worker3.setExp = 1.5;
worker3.showSalaryWithExperience();
workers.push(worker3.workerNameAndSalary());
let worker4 = new Worker("Miegel Cirus", 82, 22);
worker4.setExp = 2;
worker4.showSalaryWithExperience();
workers.push(worker4.workerNameAndSalary());
const sorted = workers.sort((a, b) =>
  +a.split(":").pop() < +b.split(":").pop() ? -1 : 1
);
console.log(sorted);

//*********************** task 5 ***********************

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return 3.14 * this.radius ** 2;
  }
}

class Triangle extends GeometricFigure {
  constructor(legA, legB) {
    super();
    this.legA = legA;
    this.legB = legB;
  }
  getArea() {
    return (this.legA * this.legB) / 2;
  }
}
let sumArray = [];
function handleFigures(figures) {
  for (var i = 0; i < figures.length; i++) {
    sumArray.push(figures[i].getArea());
    console.log(
      GeometricFigure.name + ": " + figures[i] + ": " + figures[i].getArea()
    );
  }
}

const reducer = (previousValue, currentValue) => previousValue + currentValue;

// !!!!   Приклад вводу в консоль !!!!
const figures = [
  new Triangle(4, 5),
  new Square(7),
  new Circle(5),
  new Circle(3),
  new Triangle(2, 15),
];
console.log(handleFigures(figures));
console.log("Total area: " + sumArray.reduce(reducer));
