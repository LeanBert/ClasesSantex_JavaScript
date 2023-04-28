// clases

//objeto literal
const persona1 = {
    nombre: 'Lean', //propiedades
    apellido: 'Garcia', //propiedades
    edad: 21, //propiedades
}



class Persona{ //clase persona
    nombre;
    apellido = 'Bertero';
    edad = 19;

    //constructor : es una funcion que se ejecuta siempre con las clases
    constructor(nombreInicial) {
        this.nombre = (nombreInicial);
        //this = hace referencia a un objeto
    }

    //Nota al margen: El constructor se ejecuta tres veces por el hecho de que hay 3 objetos llamados persona

}

//creando el objeto persona 
//se inicializa el objeto persona
const persona2 = new Persona("Gaston"); //persona 1 = argumentos
const persona3 = new Persona("pepe"); //persona 2 = argumentos
const persona4 = new Persona("Josefina"); //persona 3 = argumentos


//muestra lo que ejecuta la consola en pantalla
console.log(persona2);
console.log(persona3);
console.log(persona4);

