/// Clase#5 Clases, modulos y generadores

// Las clases nos facilitan la vida como programadores y en el caso en particular de JS, nos permite trabajar con programacion orientada a objetos (POO)

class calculator {
    // Introducimos la palabra class con la cual indicamos que estamos definiendo una clase
    constructor() {
    // las clases necesitan un constructor, en este asignaremos las variables DENTRO DE SCOPE GLOBAL
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB) {
        //sum vendria siendo un metodo
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

// Tener en cuenta que para llamar a una clase con una variable, es necesario el "new", explicitamente necesario e indispensable. Si se coloca solo el nombre de la clase, esto no va a funcionar
console.log(calc.sum(5,5));


/// Ahora, ¿como trabajamos con MODULOS?
// Para esto, crearemos otro archivo

import { hello } from './module';

hello();


/// Ahora, veremos GENERATORS

// tiene una sintaxis especial, puede utilizarse para una serie fibonacci, por ejemplo:
function* helloWorld() {
    if (true) {
        yield "Hello";
    }
    if (true) {
        yield "Word"
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

