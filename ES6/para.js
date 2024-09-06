const id = 1;
const productName = "Product 1";
const rating = 5;

// const product = {
//   id: id,
//   productName: productName,
//   rating: rating,
// };
const product = { id, productName, rating };
console.log(product.id);

const product2 = {
  description: "Product 2 description",
  id,
  productName,
  rating,
};

// console.log(product2.description);

const { description } = product2;
console.log(description);

// ********************************************
const arrayItems = [1, 2, 3];
let getFirstItem = arrayItems[0];
let getSecondItem = arrayItems[1];
console.log(getFirstItem, getSecondItem);

const [getFirstEle, getSecondEle] = arrayItems;
console.log("from array", getFirstEle, getSecondEle);

// ********************************************

// default parameter, rest, spread
function sum(num1 = 1, num2 = 3) {
  //default parameter
  return num1 + num2;
}
console.log(sum());
console.log(sum(10, 20));

// ************* spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([222, ...arr1, ...arr2, 111]);

// ************* rest
function rest(a, b, ...c) {
  console.log(a, b, c);
}
rest(1, 2, 3, 4, 5, 6);

// ********************************************
// map, find, filter,  some, every, includes, indexOf, findIndex

const users = [
  {
    name: "Person",
    age: 31,
    city: "Ygn",
  },
  {
    name: "Person 1",
    age: 21,
    city: "Ygn",
  },
  {
    name: "Person 2",
    age: 22,
    city: "Mdy",
  },
  {
    name: "Person 3",
    age: 24,
    city: "Ygn",
  },
];
let getAllNames = users.map((user, index) => {
  // return user.name;
  return `${user.name} age is ${user.age} and live in ${user.city}`;
});
console.log(getAllNames);

let getUserFromYgn = users.find((user, index) => user.city === "Ygn");
console.log(getUserFromYgn); // {name: 'Person 1', age: 20, city: 'Ygn'}

let getAllUsersFromYgn = users.filter((user, index) => user.city === "Ygn");
console.log(getAllUsersFromYgn); //[{ name: "Person 1", age: 20, city: "Ygn" },{name: "Person 3",age: 24,city: "Ygn",}];

let getUserSome = users.some((user) => {
  return user.age > 30;
});
// console.log(getUserSome); // true

let getUserEvery = users.every((user) => {
  // check all users greater than 20
  return user.age > 20;
});
// console.log(getUserEvery); // true

let fruits = ["apple", "orange", "mango"];
// console.log(fruits.includes("orange")); // true
// console.log(fruits.includes("aa")); // false
// console.log(fruits.indexOf("orange")); // 1
// console.log(fruits.indexOf("aa")); // -1

let getUserIndexYgn = users.findIndex((user) => user.city === "Ygn");
console.log(getUserIndexYgn); // 0

// ********************************************
// Products List Render
let products = document.querySelector(".products");
function renderProducts(getProducts) {
  products.innerHTML = getProducts
    .map((product) => `<p>${product.title}</p>`)
    .join("");
}
async function fetchProducts(params) {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await apiResponse.json();
    console.log(result);
    if (result?.products?.length > 0) {
      renderProducts(result?.products);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchProducts();
