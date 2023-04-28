// clases

//objeto literal
// const persona1 = {
//     nombre: 'Lean', //propiedades
//     apellido: 'Bertero', //propiedades
//     edad: 21, //propiedades
// }

//-------------------- (CLASE PERSONA) -------------------//

class Persona{ //clase persona
    nombre;
    apellido = 'Bertero';
    edad = 34;

    //constructor : es una funcion que se ejecuta siempre con las clases
    constructor(nombreInicial, apellidoInicial) {
        // console.log('Este es el contenido de this' , this);
        this.nombre = (nombreInicial);
        this.apellido = (apellidoInicial);
        
        //this = hace referencia a un objeto
    }

    // presentarse(){
    //     console.log("Hola, mi nombre es" , this.nombre + " " + this.apellido);
    // }

}

//-------------------- (CLASE PERSONA) -------------------//

//creando el objeto persona 
//se inicializa el objeto persona
                            
                            //NOMBRE  //APELLIDO  = SE SOBRE ESCRIBE EL APELLIDO    
const persona2 = new Persona("Leandro", "Perez"); //persona 1 = argumentos
const persona3 = new Persona("Lautaro", "Martinez"); //persona 1 = argumentos
const persona4 = new Persona("pepe", "Toloza"); //persona 1 = argumentos


// //muestra lo que ejecuta la consola en pantalla
console.log(persona2);
console.log(persona3);
console.log(persona4);


