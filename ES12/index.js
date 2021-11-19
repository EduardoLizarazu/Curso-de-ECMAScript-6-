// Clase #13 ECMAScript 2021

/// Replace
// Lo que hace es reemplazar el primer string por otro
/**
 * Param 1: El string que queremos reemplazar
 * Param 2: El string que se va a reemplazar 
*/

const string = "JavaScript es maravillo, con JavaScript puedo crear el futuro de la web";

// Solo reemplaza la primera coincidencia
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

// Reemplaza todas la coincidencias
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

/// Metodos privados

class Message {
    #show(val) {
        console.log(val);
    }
    get #add(val) {
        
    }
}

const message = new Message();
message.show("Hola!");

/// Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
// any es el primero que se resuelva, el resto lo ignora
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


/// WeakRef(element);

// class anyClass {
//     constructor(element) {
//         this.ref = new WeakRef(element)
//     }
//     {...}
// }

/// Nuevos operadores lógicos

let isTrue = true;
let isFalse = false
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false
console.log(isTrue ??= isFalse);

