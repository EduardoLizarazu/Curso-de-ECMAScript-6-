
// Clase #7 ¿Qué se implementó en ES8?

const data = {
    frontend: "Eduardo",
    backend: "Jose",
    design: "Fernanda",
}

// en ES8 se introdujo una forma de transformar objetos en matrices

const entries = Object.entries(data);
console.log(entries);

// Object.entries() nos permite hacer esto, tener en cuenta que su argumento debe ser el nombre del objeto que nos interesa transformar en matriz

console.log(entries.length);

// al añadir el metodo .length a entries, nos permite saber el numero de elementos en el objeto

const data = {
    frontend: "Eduardo",
    backend: "Jose",
    design: "Fernanda",
}
const values = Object.values(data);
console.log(values);
console.log(values.length);

// el metodo values nos permite ignorar las llaves y saber solamanete el valor de las keys del objeto

// en esta version tambien se añadio el padding

const string = "hello";
console.log(string.padStart(7,"hi"));

// con .padStart puedes añadir mas letras a un string
/**
 * Argumento 1: Corresponde al maximo de caracteres
 * Argumento 2: Corresponde a las letras agregadas
*/

console.log(string.padEnd(12, "__________"));
console.log("food".padEnd(12,"_______"));
