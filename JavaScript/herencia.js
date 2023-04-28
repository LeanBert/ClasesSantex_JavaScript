
//Herencia = la Herencia es alguna caracteristica que puede tomar un objeto de otro objeto 

class Persona{
    nombre;
    apellido;

    constructor (nombreInicial,apellidoInicial){
        this.nombre = nombreInicial;
        this.nombre = apellidoInicial;
    }

    presentarse(){
        console.log('Hola, mi nombre es ' , this.nombre, '' , this.apellido);
    }
}


/**/
class Alumno extends Persona{
    conlegio = 'Xacademy';
}

const alumno = new Alumno(); 
console.log(alumno);