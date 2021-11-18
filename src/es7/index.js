
// Clase #8 Async Await

// Estructura de promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        //if ternario
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    })
};


//estructura basica de Async Await
const helloAsync = async () => {
    // Ejecutamos nuestra promesa, va a esperar antes de cumplir la sentencia
    const message = await helloWorld();
    console.log(message);
};
helloAsync();

//Async Await con try-catch

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();