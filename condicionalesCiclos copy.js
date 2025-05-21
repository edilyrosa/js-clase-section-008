//*TUESDAY CLASS (20/05)
//!REPASO DE CLASES ANTERIORES
//Como puedo ejecutar codigo js? 
//para que sirve console.log()?
//diferencia entre alert(), confirm(), prompt()
//Cuales son los TDD Primitivos? string, number, boolean, null, undefined.

//Cuales con los TDD Compuestos: arry, function y objeto. Crecuerdas que es un JSON
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
console.log('Raiz cuadrada de 9 =', Math.sqrt(9));    // 3
//!Potencia con Math.pow()
console.log('Potencia de 2^3 = ', Math.pow(2, 3) +' === '+(2**3) );  // 8




//! Operadores de Comparación y logicos
//La operación devuelve un booleano, o sea return true o false.
            //* (7 es mayor que 5) === true / false
// Usados para establecer una condición logica cierta, que modificar el flujo del programa.
            //* (edad es mayor o igual que 18) === true / false
// Por lo general son el parámetro de los condicionales y ciclos o los asignamos a una variable.

 
//!Operadores de comparacion : ==, ===, !=, !==, >, <, >=, <=
// ==  compara solo el valor de dos variables.
// === compara el valor y el tipo de dato de dos variables.
console.log('operador de comparacion');
console.log(" 5 == 9 " , 5 == 6); // false
console.log(" 5 == 5 " , 5 == 5); // true
console.log("5 == '5' " , 5 == '5'); // true
console.log("5 === '5' " , 5 === '5'); // false

// / !=  compara solo el valor de dos variables
console.log(" 5 != 9 " , 5 != 6); // true
console.log(" 5 != 5 " , 5 != 5); // false
console.log("5 != '5' " , 5 != '5'); // false
// / !== compara el valor y el tipo de dato de dos variables.
console.log("5 !== '5' " , 5 !== '5'); // true
console.log("5 !== 5 " , 5 !== 5); // false
console.log("5 !== 6 " , 5 !== 6); // true
console.log("5 !== 5 " , 5 !== 5); // false


console.log('operador de comparacion:  >, <, >=, <=');
// >  compara si el valor de la izquierda es mayor que el de la derecha.
// <  compara si el valor de la izquierda es menor que el de la derecha.        
// >= compara si el valor de la izquierda es mayor o igual que el de la derecha.
// <= compara si el valor de la izquierda es menor o igual que el de la derecha.
console.log(" 5 > 9 " , 5 > 6); // false
console.log(" 5 < 9 " , 5 < 6); // true
console.log(" 5 >= 9 " , 5 >= 6); // false
console.log(" 5 <= 9 " , 5 <= 6); // true
console.log(" 5 >= 5 " , 5 >= 5); // true

const mayoridad = 18;
let luisEdad = prompt('Cuantos años tiene Luis?')
console.log(`Luis tiene ${luisEdad}, tiene la mayoridad?` ,luisEdad >= parseInt(mayoridad)); // true



//!Operadores de logicos: &&, ||, ! 
console.log('operador de logicos: &&, ||, !');
// / &&  devuelve true si ambas condiciones son verdaderas.
console.log(`Mayoridad es igual a 18 y 18 es un numero par?`, mayoridad === 18 && 18 % 2 === 0); // true

// ||  devuelve true si al menos una de las condiciones es verdadera.
console.log(`Mayoridad es igual a 18 o  19 es un numero par?`, mayoridad === 18 && 19 % 2 === 0); // true

// / !  devuelve true si la condición es falsa y viceversa.
console.log(`Lo opuesto a: Mayoridad es igual a 18?`, !(mayoridad === 18)); // false



//!Operadores de Incremento y Decremento
console.log("Operadores de Incremento y Decremento");
//Se emplea dentro de ietadores.
//para aumentar o disminutor 1 unidad. 
//Prefijo: ++x - Incrementa el valor de x ANTES de devolver su nuevo valor.
//Postfijo: x++ - Devuelve el valor actual de x y LUEGO incrementa su valor.
let x = 6
console.log('6++ es', x++);// 6
//console.log(++x);
console.log('ahora 6 es', x);// 7







//!Cliclos y condicionales
//! Condicionales
console.log('Condicionales: if, else, else if, switch, ternario');
// if  ejecuta un bloque de código si la condición es verdadera.
    //* if(true) { codigo que se ejecuta si la condicion es verdadera }

// else  ejecuta un bloque de código si la condición es falsa.
    //* else { codigo que se ejecuta si la condicion es falsa }

// else if  ejecuta un bloque de código si la condición es verdadera.
    //* else if (condicion) { codigo que se ejecuta si la condicion es verdadera }

// switch  ejecuta un bloque de código dependiendo del valor de una variable.
    //* switch (variable) { case valor: codigo a ejecutar; break; default: codigo a ejecutar si no se cumple ningun case }

// ternario  es una forma abreviada de escribir un if-else.
    //* condicion ? codigo a ejecutar si la condicion es verdadera : codigo a ejecutar si la condicion es falsa;  


//!EJERCICIOS
console.log("Ejercicios de condicionales: Escribe un if que imprima 'Mayor de edad' si la variable edad es mayor o igual a 18.");
//If

let edad = 20;
if (edad >= 18) {
  console.log(`la edad es ${edad}, entonces es Mayor de edad`);
}

console.log("Ejercicios de condicionales: Escribe un if-else que imprima 'Aprobado' si la nota es mayor o igual a 6, y 'Reprobado' si es menor");
// If-Else
let nota = 5;
if (nota >= 6) {
  console.log(`La nota es ${nota}, entonces esta: Aprobado😎`);
} else {
  console.log(`La nota es ${nota}, entonces esta: Reprobado😢`);
 
}


console.log("Ejercicios de condicionales: Escribe un if-else if-else para clasificar una nota en 'Excelente' (>=9), 'Bueno' (>=7) o 'Regular' (<7) según su valor.");
// If-Else If-Else
let calificacion = 8; 
if (calificacion >= 9) { //Todo lo Mayor o igual a 9
  console.log(`La calificacion es ${calificacion}, esto es Excelente 🧠`);
} else if (calificacion >= 7) { //Mayor o igual a 7
  console.log(`La calificacion es ${calificacion}, esto es Bueno 💡`);
} else { //todo lo Menor a 7
  console.log(`La calificacion es ${calificacion}, esto es Regular 😕`);
}


console.log("Ejercicios de condicionales: Escribe un switch que imprima el nombre del día de la semana según un número del 1 al 7.");
// Switch
let dia = 3;
switch (dia) {
  case 1: console.log('Lunes'); break;
  case 2: console.log('Martes'); break;
  case 3: console.log('Miércoles'); break;
  case 4: console.log('Jueves'); break;
  case 5: console.log('Viernes'); break;
  case 6: console.log('Sábado'); break;
  case 7: console.log('Domingo'); break;
  default: console.log('Día inválido');
}



//switch con 10 opciones para calificar a un estudiante según su nota del 1 al 10:
let notaSwitch = 7;

switch (nota) {
  case 1:
  case 2:
  case 3:
    console.log('Muy deficiente');
    break;
  case 4:
    console.log('Insuficiente');
    break;
  case 5:
    console.log('Suficiente');
    break;
  case 6:
    console.log('Bien');
    break;
  case 7:
    console.log('Notable');
    break;
  case 8:
    console.log('Muy bueno');
    break;
  case 9:
    console.log('Sobresaliente');
    break;
  case 10:
    console.log('Excelente');
    break;
  default:
    console.log('Nota inválida');
}




//TODO: Ejercicio: crea una funcion que detrrmine si el susuario pude votar o no,
//dependiendo de:
// 1️⃣Si es mayor de edad o tiene carnet 
// 2️⃣y si es ciudadano del pais.
//sus parametros son: edad, tieneCarnet, esCiudadano
//verifica los TDD de los parametros y si son correctos: number, boolean, string("si" o "no")

function puedeVotar(edad, tieneCarnet, esCiudadano) {
  if (typeof edad !== 'number' || typeof tieneCarnet !== 'boolean' || typeof esCiudadano !== 'string') {
    console.log('Error: Parámetros inválidos ❌');
    return;
  }

  if ((edad >= 18 || tieneCarnet) && esCiudadano === 'si') {
    console.log('Puede votar ✅');
  } else {
    console.log('No puede votar ❌');
  }
}
puedeVotar(20, false, 'si'); // Puede votar
puedeVotar(16, true, 'si'); // No puede votar
puedeVotar(50, true, 'no'); // No puede votar






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
for (let i = 1; i <= 10; i++) { //?Inicio del iterador, condicion log para entrar, incremento/decremento del iterador
  console.log(i);
}



console.log("Ejercicios de ciclos: Escribe un ciclo while que imprima los números del 10 al 1.");
// While
let i = 10; //?declaramos el iterador
while (i >= 1) { //?condicion log para entrar
  console.log(i);
  i--; //? incremento/decremento del iterador
}



console.log("Crea un array de 5 elementos y usa un ciclo forEach para imprimir cada elemento y su posicion.");
// ForEach
const array = ['a', 'b', 'c', 'd', 'e'];
array.forEach((element, index) => { //?elemento, posicion
  console.log(`Posicion ${index}: ${element}`); //?imprimimos el elemento y su posicion
});



console.log("Crea un array de 5 elementos y usa un ciclo map para crear un nuevo array con los elementos multiplicados por 2.");
// Map
const array2 = [1, 2, 3, 4, 5];
const nuevoArray2 = array2.map((element) => element * 2); 
console.log('Arr original', array2); // [1, 2, 3, 4, 5]
console.log('Arr filtrado', nuevoArray2); // [2, 4, 6, 8, 10]



console.log("Crea un array de 5 elementos y usa un ciclo filter para crear un nuevo array con los elementos mayores a 2.");
// Filter
const array3 = [1, 2, 3, 4, 5];
const nuevoArray3 = array3.filter((element) => element > 2);
console.log('Arr original', array3); // [3, 4, 5]
console.log('Arr filtrado', nuevoArray3); // [3, 4, 5]




//?💡Puedes encontrar Cliclos y condicionales dentro de funciones.
//?💡dentro de los ciclos puedes encontrar condicionales.

//* break  termina la ejecución de un bloque de código.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log('Se encontró el número 5, terminando el ciclo');
    break;  // Sale del ciclo cuando i es 5
  }
  console.log(i);
}
//* continue  salta a la siguiente iteración del ciclo. omitiendo el código que está después dentro de la iteración actual.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log('Saltando el número 3');
    continue;  // Omite el resto del código para i=3 y pasa a i=4
  }
  console.log(i);
}







console.log("conversiones");
//?Conversiones de tipos de datos espontaneas y forzadas
//!Espontáneas: JS convertir un TDD a otro para realizar una operación. 
//como concatenar, al comprar..: 
console.log(5 + "a" === "5a");// true -> convierte el número en cadena
console.log("5" == 5 );// true -> convierte la cadena a un número

//!Forzadas: utilizando metodos convertidores
// Conversión de string a número
console.log(Number("5")); // Salida: 5
// Conversión de número a string
console.log(String(5)); // Salida: "5"
// Conversión de booleano a número
console.log(Number(true)); // Salida: 1
// Conversión de string a número entero
console.log(parseInt("5.5")); // Salida: 5
// Conversión de string a número decimal
console.log(parseFloat("5.5")); // Salida: 5.5

