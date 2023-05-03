//Repaso de clases , que son y como conformar los objetos a partir de una clase

//objeto literal
const persona1 = {
    nombre:'Lean',
    apellido: 'Bertero',
    edad: 32,
}

class Persona {
    Nombre;
    apellido = 'fernandez';
    edad = 24;

    constructor(nombreInicial){
        // console.log('Se ejecuta el contructor');
        // console.log(nombreInicial);
        this.Nombre = nombreInicial;
    }

}

const persona2 = new Persona('Gaston');
const persona3 = new Persona('Maria');
const persona4 = new Persona('Jose');


console.log(persona1);

console.log(persona2);
console.log(persona3);
console.log(persona4);