//*TUESDAY CLASS (20/05)
//!REPASO DE CLASES ANTERIORES
//Como puedo ejecutar codigo js? 
//para que sirve console.log(      )?
//diferencia entre alert(), confirm(), prompt()
//Cuales son los TDD Primitivos? string, number, boolean, null, undefined.
//  let nombre = null
//  console.log(nombre);
 
//Cuales con los TDD Compuestos: arry, function y objeto. Crecuerdas que es un JSON

let sabores = ["chocolate", "vainilla", "fresa"];
console.log(sabores[1]);




//que significa 'this' en in Objeto?
//como acceso a las prop de un objeto y a los elementos de un array?
//Como comprobar el TDD de un valor con: instanceof y typeof

//Recuerdas los Operadores Aritmeticos: +, -, *, /, %. **

//?Clase Math: puedes hacer operaciones matematicas mas complejas.
//Math es un objeto global que proporciona funciones y constantes matemáticas.
//Math.PI  devuelve el valor de pi.
//y tiene las funciones Math.abs(), Math.ceil(), Math.floor(), Math.round(), 
// Math.random(), Math.max(), Math.min(), Math.sqrt() y Math.pow().
//Math.abs() devuelve el valor absoluto de un número.
//!Raiz cuadrada con Math.sqrt()
console.log('Raiz cuadrada de 9 es = ', Math.sqrt(9));
//!Potencia con Math.pow()
console.log('Potencia de 2^3 es = ', Math.pow(2, 3));



//! Operadores de Comparación y logicos
//La operación devuelve un booleano, o sea return true o false.
      //*(7 es mayor que 5) true
// Usados para establecer una condición logica cierta, que modificar el flujo del programa.
// Por lo general son el parámetro de los condicionales y ciclos o los asignamos a una variable.

 
//!Operadores de comparacion : ==, ===, !=, !==, >, <, >=, <=
console.log('operador de comparacion:  ==, ===, !=, !==,');

//dos = 2 //asignacion

// ==  compara solo el valor de dos variables.
console.log( "5 == 6", 5 == 6 ); //false 
console.log("5 == '5' ", 5 == '5'); //true
// === compara el valor y el tipo de dato de dos variables.
console.log( ' 5 === "5" es ', 5 === '5' ); //false

// / !=  compara solo el valor de dos variables
console.log( "5 != 6", 5 != 6 ); //true
console.log( "5 != '5'", 5 != '5' ); //false
// / !== compara el valor y el tipo de dato de dos variables.
console.log( ' 5 !== "5" es ', 5 !== '5' ); //true
console.log( ' 5 !== 5 es ', 5 !== 5 ); //false


console.log('operador de comparacion:  >, <, >=, <=');
// >  compara si el valor de la izquierda es mayor que el de la derecha.
console.log('5 > 6', 5 > 6);//f
console.log('5 >= 6', 5 > 6);//f
console.log('5 >= 5', 5 >= 5);//t

// <  compara si el valor de la izquierda es menor que el de la derecha.        
console.log('5 < 6', 5 < 6);//t
console.log('5 < 5', 5 < 5);//f
console.log('5 <= 5', 5 <= 5);//t
// >= compara si el valor de la izquierda es mayor o igual que el de la derecha.
// <= compara si el valor de la izquierda es menor o igual que el de la derecha.




//!Operadores de logicos: &&, ||, ! 
console.log('operador de logicos: &&, ||, !');
mayoria = 18;
// / &&  devuelve true si ambas condiciones son verdaderas.
console.log('mayoridad es  === 18 y 18 es par', mayoria === 18 && 18 % 2 === 0);

// ||  devuelve true si al menos una de las condiciones es verdadera.
console.log(' mayoridad es  === 18 o 19 es par', mayoria === 18 || 19 % 2 === 0);

// / !  devuelve true si la condición es falsa y viceversa.
console.log('NIEGA mayoridad es === 18', !(mayoria === 18)); //false

//!Operadores de Incremento y Decremento
console.log("Operadores de Incremento y Decremento");
//Se emplea dentro de ietadores.
//para aumentar o disminutor 1 unidad. 
//Prefijo: ++x - Incrementa el valor de x ANTES de devolver su nuevo valor.
//Postfijo: x++ - Devuelve el valor actual de x y LUEGO incrementa su valor.
let x = 6;
//console.log('x++', x++); //6
console.log('++x', ++x); //7
console.log('7', x++); //7


//!Cliclos y condicionales
console.log('Condicionales: if, else, else if, switch, ternario');
//! Condicionales
// if  ejecuta un bloque de código si la condición es verdadera.
//*if(true){codigo a ejecutar}

// else  ejecuta un bloque de código si la condición es falsa.
//*else {cuando la condicion del if() es falsa}

// else if  ejecuta un bloque de código si la condición es verdadera.
//* else if (condicion) {codigo a ejecutar}

// switch  ejecuta un bloque de código dependiendo del valor de una variable.
//*switch(variable){case 1: codigo a ejecutar; break; case 2: codigo a ejecutar; break; default: codigo a ejecutar; break;}
//ternario  es una forma abreviada de escribir un if-else.


//!EJERCICIOS
console.log(1, "Ejercicios de condicionales: Escribe un if que imprima 'Mayor de edad' si la variable edad es mayor o igual a 18.");
//If
let edadUsuario = 17;
if(edadUsuario >= 18){
    console.log('Mayor de edad');
}else{
    console.log('Menor de edad');
}

console.log("Ejercicios de condicionales: Escribe un if-else que imprima 'Aprobado' si la nota es mayor o igual a 6, y 'Reprobado' si es menor");
// If-Else



console.log("Ejercicios de condicionales: Escribe un if-else if-else para clasificar una nota en 'Excelente' (>=9), 'Bueno' (>=7) o 'Regular' (<7) según su valor.");
// If-Else If-Else


let nota = 6
if(nota >=9) { //? TODO lo mayor o igual a 9
    console.log('Excelente 🧠');
} else if(nota >=7) { //? 7 Y 8
    console.log('Bueno 👍');
}else{ //? TODO lo menor a 7
    console.log('Regular 👎');
}



console.log("Ejercicios de condicionales: Escribe un switch que imprima el nombre del día de la semana según un número del 1 al 7.");
// Switch



//TODO: Ejercicio: crea una funcion que determine si el usuario pude votar o no,
//dependiendo de:
// 1️⃣Si es mayor de edad o tiene carnet 
// 2️⃣y si es ciudadano del pais.
//sus parametros son: edad, tieneCarnet, esCiudadano
//verifica los TDD de los parametros y si son correctos: number, boolean, string("si" o "no")
//ejemplo del llamado: puedeVotar(18, true, "si");



//!Ciclos
// for  ejecuta un bloque de código un número determinado de veces.
// while  ejecuta un bloque de código mientras la condición sea verdadera.
// todo: Investigar: do while  ejecuta un bloque de código al menos una vez y luego verifica la condición.
// todo: Investigar: for in  itera sobre las propiedades de un objeto.
// todo: Investigar:  for of  itera sobre los elementos de un array o iterable.
// forEach  itera sobre los elementos de un array y ejecuta una función para cada elemento.
// map  itera sobre los elementos de un array y devuelve un nuevo array con los resultados de la función.
// filter  itera sobre los elementos de un array y devuelve un nuevo array con los elementos que cumplen la condición.


//!EJERCICIOS
console.log("Ejercicios de ciclos: Escribe un ciclo for que imprima los números del 1 al 10.");
// For




console.log("Ejercicios de ciclos: Escribe un ciclo while que imprima los números del 10 al 1.");
// While




console.log("Crea un array de 5 elementos y usa un ciclo forEach para imprimir cada elemento y su posicion.");
// ForEach




console.log("Crea un array de 5 elementos y usa un ciclo map para crear un nuevo array con los elementos multiplicados por 2.");
// Map



console.log("Crea un array de 5 elementos y usa un ciclo filter para crear un nuevo array con los elementos mayores a 2.");
// Filter





//?💡Puedes encontrar Cliclos y condicionales dentro de funciones.
//?💡dentro de los ciclos puedes encontrar condicionales.

// //* break  termina la ejecución de un bloque de código.
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log('Se encontró el número 5, terminando el ciclo');
//     break;  // Sale del ciclo cuando i es 5
//   }
//   console.log(i);
// }
// //* continue  salta a la siguiente iteración del ciclo. omitiendo el código que está después dentro de la iteración actual.
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     console.log('Saltando el número 3');
//     continue;  // Omite el resto del código para i=3 y pasa a i=4
//   }
//   console.log(i);
// }




// console.log("conversiones");
// //?Conversiones de tipos de datos espontaneas y forzadas
// //!Espontáneas: JS convertir un TDD a otro para realizar una operación. 
// //como concatenar, al comprar..: 
// console.log(5 + "a" === "5a");// true -> convierte el número en cadena
// console.log("5" == 5 );// true -> convierte la cadena a un número

// //!Forzadas: utilizando metodos convertidores
// // Conversión de string a número
// console.log(Number("5")); // Salida: 5
// // Conversión de número a string
// console.log(String(5)); // Salida: "5"
// // Conversión de booleano a número
// console.log(Number(true)); // Salida: 1
// // Conversión de string a número entero
// console.log(parseInt("5.5")); // Salida: 5
// // Conversión de string a número decimal
// console.log(parseFloat("5.5")); // Salida: 5.5
// // Conversión de número a booleano
// console.log(Boolean(5)); // Salida: true