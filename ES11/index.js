const button = document.getElementById("btn");
// Importancion dinamica
button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

// Big number
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise All Settled

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// Global This

console.log(window);
console.log(globalThis); // Funciona con todas las plataformas y con Node.js

// Nuevo operador lógico: null operator

const fooo = "asd" ?? "default string";
console.log(fooo);

const fooo2 = null ?? "default string";
console.log(fooo2);

// Optional chaining

const user = {};
console.log(user.profile.email); // rompe la aplicacion
console.log(user?.profile?.email); // pregunta y evita el eror y evita que se rompa la aplicacion, el valor si no existe es undefined

if(user?.profile?.email) {
	console.log('email');
} else {
	console.log('fail');
}