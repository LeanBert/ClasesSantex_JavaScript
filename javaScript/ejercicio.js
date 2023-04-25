// 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
// para valor 6
// 1
// 12
// 123
// 1234
// 12356

// para valor 3
// 1
// 12
// 123

let incremento, repeticion;

//ciclo for para escalones
for(incremento = 1; incremento <= 6; incremento++ ) {
    //bucle interior
    for(repeticion = 0; repeticion < incremento; repeticion++){
        document.write(incremento);
    }
    document.write("<br>");
    
}

document.write("<br>");

for(incremento = 1; incremento <= 3; incremento++ ) {
    //bucle interior
    for(repeticion = 0; repeticion < incremento; repeticion++){
        document.write(incremento);
    }
    document.write("<br>");
    
}

