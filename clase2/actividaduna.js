// Se definen las variables
let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
    { nombrepeli: "El diario de Noa", anio: 2004, protagonistas: ["Ryan Gosling", "Rachel McAdams"] },
    { nombrepeli: "El curioso caso de Benjamin Button", anio: 2008, protagonistas: ["Brad Pitt", "Cate Blanchett"] },
    { nombrepeli: "Inception", anio: 2010, protagonistas: ["Leonardo DiCaprio", "Ellen Page", "Joseph Gordon-Levitt"] },
];

// Valores por consola
console.log("Nombre: ", nombre);
console.log("Edad: ", edad);
console.log("Precio: ", precio);
console.log("Series favoritas: ", seriesFavoritas);
console.log("Películas favoritas: ", peliculasFavoritas);

// Incremento de la edad en 1 y volver a mostrarla
edad ++;
console.log("Edad nueva: ", edad);

// Se agrega una serie a la lista de series favoritas y volver a mostrarla
seriesFavoritas.push("La casa de Papel");
console.log("Series favoritas después de agregar una nueva serie: ", seriesFavoritas);
