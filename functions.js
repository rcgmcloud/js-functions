/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(n) {
  return n.toString();

}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase (n){
  n++;
  return n;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease (n){
  n--;
  return n;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add (x, y){
  var sum = x + y;
  return sum;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract (x, y){
  var difference = x - y;
  return difference;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x, y){
  var product = x * y;
  return product;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y){
  var quotient = x / y;
  return quotient;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x){
  var squared = x * x;
  return squared;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate (operation, x, y){
  //numberToString(x);
  //numberToString(y);
  var result;
  var op;
  if (operation === "add"){
    result = add(x, y);
    op = " + ";
  }
  if (operation === "subtract"){
    result = subtract(x, y);
    op = " - ";
  }
  if (operation === "multiply"){
    result = multiply(x, y);
    op = " * ";
  }
  if (operation === "divide"){
    result = divide(x, y);
    op = " / ";
  }
  console.log(x + op + y + " = " + result);
  return result;
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a, b){
  if (a > b){
    return true;
  }
  return false;
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a, b){
  if (a < b){
    return true;
  }
  return false;
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a, b){
  if (a === b){
    return true;
  }
  return false;
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x, y){
  if (x < y){
    return x;
  }
  return y;
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x, y){
  if (x > y){
    return x;
  }
  return y;
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n){
  if (n % 2 === 0){
    return true;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n){
  if (n % 2 !== 0){
    return true;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, max){
  var letter;
  var percent = score / max;
  if (percent >= 0.9){
    letter = "A";
  } else if (percent >= 0.8){
    letter = "B";
  } else if (percent >= 0.7){
    letter = "C";
  } else if (percent >= 0.6){
    letter = "D";
  } else {
    letter = "F";
  }
  return letter;
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restuarant){
  if (restuarant.hasOwnProperty("reviews")){
    restuarant.reviews++;
  } else {
    restuarant["reviews"] = 1;
  }
  return restuarant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1, word2){
  return word1 + " " + word2;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius){
  var circle = {
    circumference: Math.PI * radius * 2,
    area: Math.PI * radius * radius
  }
  return circle;
}
