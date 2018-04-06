// Pure Functions

// pure function
function addTwoNums(num1, num2) {
  return num1 + num2;
}

// pure function converted to an arrow function:
const addTwoNums = (num1, num2) => num1 + num2

// impure function
let donutCounter = 0;

function addToDonutCounter(num1, num2) {
  return ++donutCounter + num1 + num2;
}

const donut = {
  type: "Glazed"
};

// impure function that mutates state
function addPropertyToDonut(donut, property, value) {
  donut[property] = value;
  return donut;
}

// impure function converted to arrow function:
const addPropertyToDonut = (donut, property, value) => {
  donut[property] = value
  donut;
}

// pure function that doesn't mutate state
function purelyAddPropertyToDonut(donut, property, value) {
  const newDonut = Object.assign({}, donut);
  // const newDonut = {...donut}
  newDonut[property] = value;
  return newDonut;
}


// Higher Order Function that takes in another function as a parameter
function filter(array, callback) {
  let evensArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      evensArray.push(array[i]);
    }
  }
  return evensArray;
}

function isEven(num) {
  return num % 2 === 0;
}


// Higher Order Function that returns an anonymous function using partial application
function multiplyBy(multiplier) {
  return function(num) {
    return multiplier * num;
  }
}

// multiplyBy(2)(10);
// const doubler = multiplyBy(2);
// doubler(100);


// Functional Composition
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

// add(multiply(4, 5), 2);
// const multiplied = multiply(4, 5);
// add(multiplied, 2);


// Anonymous Functions
const add = function (num1, num2) {
  return num1 + num2
};
