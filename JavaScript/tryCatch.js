function division(a,b){

    if (b === 0){
        throw "No se puede dividir por cero";
    }

    return a / b;
}

console.log("Inicio del programa");

try {
    const result = division(4,0);
    console.log(result);
} catch (err) {
    console.error("Ocurrio un error, intente mas tarde");
}

console.log("Fin del programa");