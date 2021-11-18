/// Clase#4 Arrow Functions, Promesas y Parámetros en objetos

// PRPPIEDADES DE OBJETSO MEJORADA

// definiremos algunas variables primero
 
let name = "Jeff";
let age = 24;

//antes de ES6

obj = { name: name, age: age };

//ahora con ES6

obj2 = {name, age};

// Ahora, se mostrara en consola para verificar que efectivamente se creo el objeto
console.log(obj2);


// AHORA VEREMOS LAS ARROW FUNCTION

// Estas tienen una sintaxis muy reducida y permite trabajar con This no vinculables
// Pero ¿Como funcionan?

const names = [
    {name: "Jeff", age: 24},
    {name: "Aleja", age: 21}
]

// como pudimos ver, vamos a trabajar con un array de dos objetos, dichos objetos son anonimos

// Antes de ES6

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

// Defino el nombre de mi varible en la que voy a trabajar (listOfNames), ahora, utilizo el metodo .map. Por si no recuerdan, .map me permiete crear un nuevo array dependiendo de la funcion a la que llame. Generalmente, se usaba funciones anonimas.

// Ahora, con ES6

let listOfNames2 = names.map(item => console.log(item.name));

// Algo caracteristico e indispensable de las arrow function es el (=>) esto inmediatamente nos indica que estamos trabajando con una arrow function. Ahora bien, es posible observar que en este tipo de funciones nos ahorramos definir una funcion anonima y es pasible expresarlo todo en una sola linea. En este caso en particular, esta funcion nos mostrara en consola todos los nombres de nuestro array.

// Otra forma de escrbir las arrow funcion: 
const listOfNames3 = (name, age, country) => {
    /* ... */
}

// tener en cuenta que en esta forma, trabajamos con las keys que necesitamos de los objetos. Y los (...) nos indica que ahi va el bloque de codigo de la funcion que necesitamos que haga

// Ahora, otra forma seria:

const listOfNames4 = name => {
    /* ... */
}

// este ultimo se usa solo cuando voy a trabajar con un unico atributo, de forma queme puedo evitar colocar los parentesis

// Finalmente, la ultima forma seria

const square = num => num*num;


/// AHORA TRABAJEMOS CON PROMESAS
// JS no es sincronico, significa qeu no puede haber mas de un evento que se este ejecuntando.

// Para solucionar el problema del asincronismo en JS, ademas del Callback Hell nacen las promesas. Basicamente, una promesa en JS nos indica que algo va a pasar.

// PILAS, JS es asincronico todo el tiempo. Debes comprender muy bien esto para entender como tu codigo va a correr y no toparte con algo inesperado en tu prorama.

// trabajaremos con arrow functions
const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Ups!");
        }
    });
}
// Aclaremos un poco:
// Las promesas tienen 3 estados: pending, resove, reject.
/**
 * Resolve: Nos quiere decir que la promesa se complio
 * Reject: Significa que la promesa NO se cumplio
 * Para poder verificar si se cumplio o no acudimos al uso de condicionales (if, else)
 */

helloPromise() // esta linea nos permite ejecutar la promesa
    .then(response => console.log(response))
    .catch(error => console.log(error));

// then nos permite obtener la respuesta (pueden ser varios)
// catch me permite objeter el error en caso de que no se cumpla la promesa
