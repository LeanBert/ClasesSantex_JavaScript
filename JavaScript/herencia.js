
//Herencia = Es el mecanismo por el cual una clase permite heredar las características (atributos y métodos) de otra clase.     

class Persona{
    nombre;
    apellido;

    constructor (nombreInicial,apellidoInicial){
        this.nombre = nombreInicial;
        this.nombre = apellidoInicial;
    }

    presentarse(){
        console.log('Hola, mi nombre es ' , this.nombre, ' ' , this.apellido);
    }
}


/**/
class Alumno extends Persona{
    conlegio = 'Xacademy';
}

const alumno = new Alumno(); 
console.log(alumno);