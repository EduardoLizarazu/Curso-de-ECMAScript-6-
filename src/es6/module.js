// Aqui tendremos logica separada de nuestro archivo principal

const hello = () => "hello";

// Con export default podemos exportar una variable, o función por defecto de un archivo así:
export default hello;
// con esta linea puedo exportar el modulo y llamarlo donde lo necesite

// import {  hello  } from "./module";

// con esta linea importamos el modulo
// esto significa que podemos tener funcioens que hagan ciertas tareas en especifico (como llamar a una API), fuera de nuestro documento principal y simplemente importarlas
// hello();