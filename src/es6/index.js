// Clase #3 LET y CONST, Multilínea, Spread Operator y Desestructuración

// Antes de ES6 pasaba esto

let Elsa = "Libre soy, libre soy ... no puedo ocultarlo \n "
 + "mas, libre soy";
// esto funcionaba, sin embargo, no es una opcion muy optima que digamos

// Ahora usando ES6

let Elsa2 = `Voy a probar que puedo hacer sin limitar
mi proceder, ni mal ni bien que obeder
jaaammmmmmmm`;

// Ahora, para verificar que ambas fommas funcionan usaremos la consola

console.log(Elsa);
console.log(Elsa2);

/// Nota1: Notar que si bien el uso del (;) no es necesario, en estos casos, lo usamos porque hace parte de las buenas practicas de programacion para que los demas vean el codigo lo mas legible posible

// Ahora, crearemos un objeto

let person = {
    "name": "Jeff",
    "age": 24,
    "country": "CO"
}

//Del curso de fundamentos de JS, sabemos que al usar la notacion person.name (por ejemplo), llamaresmos al atributo correspondiente a la key name del objeto person

console.log(person.name, person.age);

// Ahora vamos a desestructurar nuestro objeto

let { name, age } = person;
// con lo anterior lo que hicimos fue desestructurar nuestro objeto, esta notacion es super util porque podemos elegir cuales keys necesitamos del mismo objeto y ya puedo proceder a desplazarlas en la consola sin necesidad de utilizar (object.keys)

console.log(name, age);

// Ahora, vamos a trabajar con arrays
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

// Ahora, queremos tener un array que contega a team1 y team2. pero ademas de esto, agregar un nuevo miembro que seria David, Para esto, usaremos el (...), esto nos permite traer un array competo
let education = ["David", ...team1, ...team2];

console.log(education);

// Originalmente se usaba var par asignar variable 
// Podemos ver que usamos mucho LET, pero ¿por que?. Bueno, LET se usaba para el scope, es decir, se define para el bloque de codigo en el cual se va a usar

{
    var global = "Global Var";
}

{
    let globallet = "Global Let";
    console.log(globallet);
}

console.log(global);

// ¿Por que no usar VAR? JS es un lenguje debilmente tipado, es decir, cuando definimos una variable con VAR, podemos cambiar su valor en el transcurso del codigo y con esto podriamos ocasionar distintos BUGS y errores en nuestro programa. Por dicho motivo es mejor usar LET y CONST

const a = "b";
a = "a";

// a diferencia de LET, const se puede utilizar en el scope global, sin embargo, este no se deja modificar como si lo hacia VAR. Cuando intentamos hacerlo, este nos muestra el valor inicial que le pusimos a nuestra variable y posteriormente un error que corresponde a cuando quisimos reasignarle otro valor.
console.log(a);
