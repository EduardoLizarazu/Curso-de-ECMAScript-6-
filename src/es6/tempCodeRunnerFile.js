// trabajaremos con arrow functions
const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (false) {
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