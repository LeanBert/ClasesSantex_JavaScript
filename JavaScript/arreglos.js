//arreglos = permite guardar multiples elementos dentro de una sola variable
// puede ser ccedido por medio de un indice
//el indice de los arrays inicia en cero
//puede contener valores de tipo mixtos

/*Los arreglos van con corchetes (IMPORTANTE)*/
//el contenido del arreglo debe estar separado por coma (no olvidar) 
//puede ir cualquier tipo de dato dentro de un array

const listadeAlumnos = [
    "pepe",
    "pepe2",
    "pepe3",
    "pepe4", 
];

console.log(listadeAlumnos[2]); 


/*Otra forma de ver arreglos*/
const numeros = (44,55,57,38,21); /*Lenght: 5*/

for(let i = 0; i < numeros.lenght; i++){
    console.log(numeros[i]);
}