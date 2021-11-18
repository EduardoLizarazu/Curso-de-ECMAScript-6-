/// Clase #9 Hablemos de ES10

// Hacemos un arreglo

let array = [1,2,3,[4,5,6,[7,8,9]]];

console.log(array.flat(1));

// flat() crea una nueva matriz con todos los elementos de sub-array concatenamos recursivamente hasta la profundidad especificamete

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]));

let hello = "                           hello world";

console.log(hello);
console.log(hello.trimStart);

// funcion .trimStart() me permite eliminar los espacios en blanco

try {

} catch {
    error
}

let entries = [["name", "oscar"],["age", 32]];

console.log(Object.fromEntries(entries));
// Esto nos permite transformar un arreglo en un objeto

let mySymbl = `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);