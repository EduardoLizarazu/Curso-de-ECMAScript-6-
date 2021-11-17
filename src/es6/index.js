// Primero vamos atrabajar como se hacia antes de ES6
function newFunction(name, age, country) {
    var name = name || "Andres";
    var age = age || 28;
    var country = country || "BR";
    console.log(name,age,country);
}

// Ahora con ES6 se realiza asi

function newFunction2(name = "oscar", age=32, country="CO") {
    console.log(name, age, country);
}

// Para llamar la funcion hay dos formas:
// Para el primer caso, hay funciones que tomas los atributos por si mismos,
// entonces se pueden dejar vacias

newFunction();
newFunction2("Jeff", "24", "CO");

// Ahora veremos concatenaciones antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Ahora con los templates se hace mas facil concatenar, es necesario ubicar
// en nuestro teclado las comilla invertidas
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

