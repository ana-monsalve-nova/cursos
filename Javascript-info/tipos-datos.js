// Tipos de datos
// Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.

// Hay ocho tipos de datos básicos en JavaScript. En este capítulo los cubriremos en general y en los próximos hablaremos de cada uno de ellos en detalle.

//hay 5 tipos de datos primitivos:
// String, number, boolean, undefined, symbol, null

//

// Podemos almacenar un valor de cualquier tipo dentro de una variable. Por ejemplo, una variable puede contener en un momento un string y luego almacenar un número:



let age = 30; // number
let name = "John Doe"; // string
let isActive = true; // boolean
let address = undefined; // undefined
let salary = null; // null
let uniqueID = Symbol('id'); // symbol
let bigNumber = 12345678901234567890n; // bigint

let person = { // object
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isActive: true
};

let colors = ["red", "green", "blue"]; // array

function greet(name) { // function
  return `Hello, ${name}!`;
}

let now = new Date(); // Date
let pattern = /w+/g; // RegExp
