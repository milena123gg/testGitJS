//declarando e incializando en una sola linea
var edadUsuario = 18;

//Estructuras de control: CONDICIONALES

//Estructura condicional simple

//decido si el bloque de codigo se ejecuta o no
//se ejecuta si la expresion da True
//no se ejecuta si la expresion da False
//una vez que se ejecuta o no se ejecuta, seguimos por las siguientes
//lineas del flujo principal del archivo
//if (edadUsuario >= 13) {
//    console.log("Podes ver la peli");
    //VARIABLE DECLARADA E INICIALIZADA
//    let nombrePelicula = "Mario Bros"
//    console.log("Ya esta disponible " + nombrePelicula)
//}

//condicional doble
//if (edadUsuario >= 13) { //cuando da V
//    console.log("Podes ver la peli");
//} else { //cuando da F
//    console.log("No podes ver la peli");
//}

//condicional multiple
/*
if (edadUsuario >= 16) { //cuando da V
    console.log("Podes ver la peli");
} else if (edadUsuario >=13){ //cuando da V
    console.log("Podes ver la peli pero con supervision de un adulto. ");
} else {
    console.log("No podes ver la peli")
}*/

//condicional multiple switch

switch (edadUsuario) {
    case 13:
    case 14:
    case 15:
        console.log("Podes ver la peli pero con supervision de un adulto. ");
        break;
    default:
        console.log("Evaluando que respuesta le doy al usuario")

}


//console.log(nombrePelicula)

const PI = 3.14;
//UNA CONSTANTE NO SE PUEDE REASIGNAR
//PI = 2;


//OPERADORES ARITMETICA: resultado numerico

var resultadoAritmetico = 3+4; //suma
resultadoAritmetico = 3-4; //resta
resultadoAritmetico = 3/4; //division
resultadoAritmetico = 3*4; //multiplicar
resultadoAritmetico = 3**4; //potencia
resultadoAritmetico = 13%4; //modulo

//OPERADORES RELACIONALES: devuelven un dato logico

var resultadoRelacional = 13 > 7; //mayor que
resultadoRelacional = 13 >= 7; //mayor o igual que
resultadoRelacional = 13 < 7; //menor que
resultadoRelacional = 13 <= 7; //menor o igual que
resultadoRelacional = 13 == 7; //igual que
resultadoRelacional = 13 != 7; //mayor que
