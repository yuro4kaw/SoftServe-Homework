//            Homework 2
//task 1

let x = 1;
let y = 2;
let res1 = String(x) + y;
console.log(res1);

let res2 = Boolean(x) + "" + y;
console.log(res2);
console.log(typeof res2);

let res3 = x + y > 2;
console.log(res3);
console.log(typeof res3);

let res4 = parseInt("x + y");
console.log(res4);
console.log(typeof res4);

//task 2
let x1 = prompt("Введіть число", "");
console.log(x1);
let x2 = x1 > 0;
let x3 = x1 % 2;
let x4 = x1 % 7;

switch (x2) {
  case true:
    switch (x3) {
      case 0:
        console.log("Число парне додатнє");
        break;
      default:
        console.log("Число не підходить під критерії");
    }
    break;
  default:
    console.log("Число не підходить під критерії");
}

switch (x4) {
  case 0:
    console.log("Число кратне 7");
    break;
  default:
    console.log("Число не кратне 7");
}

//task 3
const arr = [];
arr[0] = 2;
arr[1] = "hello";
arr[2] = !true;
arr[3] = null;
console.log(arr.length);
let fifthElement = prompt("Введіть будь-яке значення", "");
arr[4] = fifthElement;
console.log(fifthElement);
arr.shift(0);
console.log(arr);

//task 4
let cities = ["Rome", "Lviv", "Warsaw"];
let xr = cities[0] + "*" + cities[1] + "*" + cities[2] + "*";
console.log(xr);

//task 5
let age = prompt("Введіть ваш вік", "");
if (age >= 18) {
  console.log("Ви досягли повнолітнього віку");
} else {
  console.log("Ви ще занадто молоді");
}

//task 6
let A = Number(prompt("Введіть довжину першої сторони трикутника"));
let B = Number(prompt("Введіть довжину другої сторони трикутника"));
let C = Number(prompt("Введіть довжину третьої сторони трикутника"));

let p = (A + B + C) / 2; // Знаходимо півпериметр

let area = Math.sqrt(p * (p - A) * (p - B) * (p - C)); // За формулою Герона знаходимо площу
console.log("area = " + area.toFixed(3)); // Виводимо площу, округлену до трьох знаків після коми

// Перевірка чи можливий такий трикутник, якщо можливий тоді виконуєм перевірку чи трикутник прямокутний
if (area > 0) {
  // Перевірка чи трикутник прямокутний
  const mas = [A, B, C];
  let minElement1 = mas[0],
    minElement2 = mas[1],
    resultArray = new Array(2);
  // За допомогою сортування масиву знаходимо дві найменші сторони
  for (var i = 2; i <= mas.length - 1; i++) {
    if (mas[i] < minElement1) {
      if (minElement2 > mas[i]) {
        minElement2 = mas[i];
      } else {
        minElement1 = mas[i];
      }
    }
  }

  resultArray[0] = minElement1;
  resultArray[1] = minElement2;

  let min1 = resultArray[0];
  let min2 = resultArray[1];
  let minSum = (min1 * min2) / 2;

  // Формула по якій перевіряєм прямокутність
  if (minSum == area) {
    console.log("Трикутник прямокутний");
  } else {
    console.log("Трикутник НЕ прямокутний");
  }
} else {
  console.log("Такого трикутника не існує!"); // Виведеться якщо трикутник неможливий (одна сторона більша ніж сума двох інших сторін)
}

//task 7
Data = new Date();
Hour = Data.getHours();
console.log(Hour);

if (Hour > 22 || Hour < 5) {
  console.log("Доброї ночі");
} else if (Hour > 4 && Hour < 11) {
  console.log("Доброго ранку");
} else if (Hour > 10 && Hour < 18) {
  console.log("Доброго дня");
} else if (Hour > 17 && Hour < 23) {
  console.log("Доброго вечора");
}

switch (Hour) {
  case 23:
    console.log("Доброї ночі");
    break;
  case Hour > 4 && Hour < 11:
    console.log("Доброго ранку");
  case Hour > 10 && Hour < 18:
    console.log("Доброго дня");
  case Hour > 17 && Hour < 23:
    console.log("Доброго вечора");
}
