// a variable declared with let can be updated within its scope
// the king of variables. "let" is block-scoped so anything that is between {}

let goAway = 'go away'
let pleas = 'pleas'
console.log(goAway + ' ' + pleas)

let kills = "K: 31"
let deaths = "D: 14"
let assists = "A: 4"
console.log(kills + ' ' + deaths + ' ' + assists)



//var declarations are for global use & used inside funcitons
var easyGame = 'Herp'
var maybeNot = 'Derp'

console.log(easyGame + ' ' + maybeNot)



// A constant(const) as the name implies !never! changes
const Pi = 3.14159265359
console.log(Pi)


// Data-types


// Numbers

// a variable can at one point be a string and at another point be a number
let fireBall = "Ignited"
fireBall = 35847

console.log(fireBall)

// you can do the same thing with decimal numbers (floating point numbers)

let iceNova = 512
iceNova = 512.47
console.log(iceNova)


// Strings

// Strings are a value defined between quotes

let dualStrike = "Terrible"
let doubleStrike = 'Swag'

console.log(dualStrike + ' ' + doubleStrike)

// Single quates & double quotes are essentaially the easyGame

let moltenStrike = `lavameatballs:
* Meatballone
* Meatballtwo
* Meatballthree
`;

console.log(moltenStrike)


// Booleans

// A boolean can only have two values, either 'True' or 'False'
// It's usually used to store yes/no values

let nameFieldChecked = true;
let ageFieldChecked = false;

console.log(nameFieldChecked + ' ' + ageFieldChecked)

let isGreater = 4 > 1;
alert(isGreater);

// Arrays

// Arrays are used to store multiple values in a single variable

var ascendancy = ["Pathfinder", "Raider", "Deadeye"]

// access the first element of "ascendancy"

var first = ascendancy[0];

console.log(ascendancy)


// Operators

// Arithmetic operators are used to perform arithmetic on numbers

// Adding & subtracting

var q = 2
var r = 3
var s = q + r // subtracting "var c = a - b"

console.log(s)

//  Multiplying & Dividing

var d = 4
var e = 6
var f = d * e // subtracting "var c = d / e"

console.log(f);

//  Remainder

var g = 82
var h = 8
var i = g % h

console.log(i);

// Incrementing & Decrementing
var j = 17;
j++;  // x--; = Decrementing
var k = j;

console.log(j);


// Assignment operators assign values to JavaScript variables

/* "+=" adds a value to variable
   "-=" subtracts a value from variable
   "*=" multiplies the variable with a values
   "/=" divides a variable with a values
   "%=" adding a value will result in the remainder of the variable
*/

//Table for trying the different Operators

//Arithmetic Operators

var add = adding(4, 3);
document.getElementById("add").innerHTML = add;

function adding(a, b) {
  return a + b;
}

var subtract = subtracting(4, 3);
document.getElementById("subtract").innerHTML = subtract;

function subtracting(a, b) {
  return a - b;
}

var multiply = multiplying(8, 3);
document.getElementById("multiply").innerHTML = multiply;

function multiplying(a, b) {
  return a * b;
}

var divide = dividing(27, 4);
document.getElementById("divide").innerHTML = divide;

function dividing(a, b) {
  return a / b;
}

var remainder = remain(27, 4);
document.getElementById("remainder").innerHTML = remainder;

function remain(a, b) {
  return a % b;
}
