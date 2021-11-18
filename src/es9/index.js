// Clase #9 ¿Que se implemento en ES9?

/**
 * Spread Operator
 */

const obj = {
    name: "Eduardo",
    age: 24,
    country: "BO",
};

let { name, ...all } = obj;
// Aqui desestructuramos el objeto, sacamos el key que nos interesaba que en este caso es age, y para no escribir el resto usamos ...all
console.log(all);

// (...) es conocido como el operador de programacion, con este, podemos traer todos los keys con sus respectivos values de objetos, como veremos a continuacion
/**
 * Porpagation Properties
*/
const obj1 = {
    ...obj,
    height: 1.67,
};

console.log(obj1);
// Como podemos ver obj1, tiene los keys del obj y ademas agregamos un nuevo key que seria height

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout( () => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    });
}

// Esto lo vimos en la clase anterior de Async/Await

// llamamos la funcion 
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=>console.log("Finalizo"))
    // Finally es cuando se termine todo

// Como mejoro el manejo de Regex?
// esto es super util para trabajar con fechas
// Como sabemos, las fechas tienen: año, mes, dias
// el [0-9] nos indica el rango de numeros, mientras que el ///{4} nos indica que se necesitan maximo 4 numeros

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)