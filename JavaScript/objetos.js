//Objetos / Object
//En prograqmacion cualquier cosa puede ser representada como un objeto{

//objeto persona
const persona = {

    nombre:'Leandro',
    apellido: 'Bertero',
    edad: 32,
    activo: true,
    
}

persona.edad = 37;  //modificar una propiedad existente en un objeto
console.log(persona);
//agregar una propiedad al objeto
persona.direccion = 'Calle falsa 123';

//--------------------------------------------------------------------------------//

//objeto lapicera
const lapicera = {

    Marca:'Faber castell',
    color: 'Negro',
    precio: 100,
    disponible: true,
    tientapa: true,
    // origen: 'Japon',
    // escribir: function(){
    //     console.log('estoy escribiendo');
    // }

}

//acceder al objeto y propiedad
lapicera.origen = 'China'; //se agrega una propiedad
lapicera.Marca = 'Faber';
console.log(lapicera);  //corrección por código
//acceso a propiedades y valores    
console.log('El precio de la lapicera es:', '$' ,lapicera['precio']);
console.log('precio' in lapicera); //true or false
//-------------------------------------------------------------------------------------//


