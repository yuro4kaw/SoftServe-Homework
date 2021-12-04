//Homework 3

//task1
const arr = [2, 3, 4, 5];
var total = 1;

for (var i = 0; i < arr.length; ++i) {
  total *= arr[i];
}

console.log(total);

var array = [2, 3, 4, 5],
  i = array.length,
  result = 1;
while (i > 0) {
  result *= array[--i];
}
console.log(result);

//task 2
for (var i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is odd.");
  } else {
    console.log(i + " is even.");
  }
}

//task 3

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = [];
function randArray(k) {
  arr.length = k;
  arr[i] = getRndInteger(1, 500);
  console.log(arr);
}
randArray(4);

//task 4
let a = prompt("Enter Base");
let b = prompt("Enter Exponent");

function raiseToDegree(a, b) {
  let result = Math.pow(a, b);
  return result;
}
raiseToDegree(a, b);

//task 5
function findMin(a, b, c) {
  let k = Math.min(a, b, c);
  return k;
}
findMin(6, -10, 3);

//task 6
function findUnique(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) return false;
    }
  }
  return true;
}
findUnique([2, 6, 7, 3, 2]);

//task 7
function lastElem(myArray, k) {
  let newArray = myArray.splice(-k, k);
  return newArray;
}
console.log(lastElem([52, 61, 58, 76, 35, 23], 4));

//task 8
function Upper(str) {
  var str = "каждый охотник желает знать";
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}
console.log(Upper(str));
