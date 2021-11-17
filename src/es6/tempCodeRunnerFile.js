// Ahora, vamos a trabajar con arrays
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

// Ahora, queremos tener un array que contega a team1 y team2. pero ademas
// de esto, agregar un nuevo miembro que seria David, Para esto, usaremos
// el (...), esto nos permite traer un array competo
let education = ["David", ...team1, ...team2];

console.log(education);