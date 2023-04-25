
//objetos : son un tipo de datos con los cuales vamos a poder relacionarlos unos con otros 


//se crea el objeto persona
const persona = {
    nombre : "Lean", 
    apellido : "Bertero",
    edad : 23,
    esMayoDeredad : true,
    
    saludar: function(){
        console.log("hola");    
    }

}


const nombre = persona['nombre'];
const apellido = persona.apellido;

//Propieades del objeto persona

console.log(nombre);
console.log(apellido);

persona.edad = 35;
console.log(persona.edad);


persona.pais = 'Argentina';
console.log(persona.pais);




