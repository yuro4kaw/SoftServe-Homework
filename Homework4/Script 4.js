// Homework 4

//task 1
let area, width, height;

function calcRectangleArea() {
  width = prompt("Enter width");
  height = prompt("Enter height");
  area = width * height;
  if (isNaN(area)) {
    throw new Error("Error");
  }
}
try {
  calcRectangleArea();
  console.log(area);
} catch (Error) {
  console.log("Please only enter numeric characters only.");
}

//task 2
let age;

function checkAge() {
  age = prompt("Enter your age");
  console.log(age);
  if (age === "") {
    throw new Error("Clear");
  } else if (isNaN(age)) {
    throw new Error("NaN");
  } else if (age < 14) {
    throw new Error("Less14");
  }
}
try {
  checkAge();
  console.log("film");
} catch (Error) {
  if (Error.message == "Clear") {
    console.log("The field is empty! Please enter your age");
  } else if (Error.message == "NaN") {
    console.log("Please enter numeric characters only.");
  } else if (Error.message == "Less14") {
    console.log("Your age is less than 14 ;(");
  }
}

//task 3
class MonthExeption {
  constructor(message) {
    this.message = message;
  }
  method1() {
    this.message = " Incorrect month number";
    this.name = "MonthExeption ";
    return this.name + this.message;
  }
}
let k = new MonthExeption();

function showMonthName(month) {
  let months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];
  if (Number.isInteger(month)) {
    if (month < 1 || month > 12) {
      throw new Error();
    } else {
      console.log(months[month - 1]);
    }
  } else {
    throw new Error();
  }
}
try {
  console.log(showMonthName(5));
} catch (Error) {
  console.log(k.method1());
}

// task 4
function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }
  return { id: id };
}

function showUsers(ids) {
  let final = [];
  ids.forEach(function (id) {
    try {
      let person = showUser(id);
      final.push(person);
    } catch (Error) {
      console.log(Error.message);
    }
  });
  return final;
}
showUsers([5, -6, -3, -4, 1, 2, 3]);

function showUsers(ids) {}
showUsers([5, 6, 3, 4, 1, 2, 3]);
