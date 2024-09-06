// Logical Operators(&&)(||)
let result1 = true;
let result2 = false;
let result3 = "hello";

function getName(name) {
  return name;
}
console.log(true && result3);
console.log(false || result3);
console.log(true && getName("ES6"));

// Template literals(string template)
let name1 = "MT";
let name2 = "Coding";
console.log(name1 + " " + name2);
console.log(`${name1} ${name2}`);

// Ternary operator
let showFruit = true;

function getFruit(name) {
  return name;
}

if (showFruit) {
  console.log(getFruit("Apple"));
} else {
  console.log(getFruit("Orange"));
}
showFruit ? console.log(getFruit("Apple")) : console.log(getFruit("Orange"));
