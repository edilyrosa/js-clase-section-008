console.log('hola desde el script');
console.log('Tpos de datos!');

//String
let nombre = 'Carla' //String
let nombreDos = "Carla ${nombre}" //String
let apellido = `Morales ${nombre}` //String
let altura = '30'
console.log(apellido);
console.log(nombreDos);

//Number
let age = 20 
let peso = 20.20



//Boolean
let isAuth = true
console.log(isAuth);

//Undenined
let indefi
console.log(indefi);

//Null 
let obj = null

console.log('operaciones aritmeticas');
console.log(age - altura);
console.log('concatenacion', age + altura);
console.log(20 - 30);
console.log(20 + 30);
console.log(20 * 30);
console.log(20 / 5);
console.log(20 % 3);
console.log(3 ** 3);

console.log((10/2.2).toFixed(2));
console.log(  Math.round(10/2.2));

console.log(undefined - 5 );//NaN




//*************************** THURSDAY CLASS!
//Vimos como puedo ejecutar codigo js? ahora recuerdamelo.
//para que sirve console.log()?
//direncia entre alert(), confirm(), prompt()

//Vimos TDD Primitivos, dime cuales son? string, number, boolean, null, undefined.
//?nos faltan los compuestos: arr, func objeto

//TDD String
let nombreUser = 'Edily'
let letra = `E`
let caracter = "^"
let num = "7"
let edadU = 30 //TDD Number
console.log(`hola mi edad mi edad es ${edadU}`);

console.log(50 + edadU);
console.log("50" + edadU);
console.log("50" - edadU);
console.log("50" * edadU);
console.log(undefined - 5);
let acepto = true
let usuario = null
let saldo
console.log(saldo);
console.log(usuario);



//!array: son muy importantes para arreglar informacion y compartirla.
//Permite almacenar múltiples valores en una sola variable. Entre corchetes y separados por coma.

const sabores = ['mantecado', 'chocolate', 'fresa']
const deTodo = ['mantecado', acepto, false, {}, 22.22, null]
// console.log(sabores[0]);
// console.log(sabores[2]);
sabores.map( (e, i) => console.log(i+'.'+ e.toUpperCase()))


//!Funciones
//Contienen bloques de código reutilizables y ejecutables. Los paréntesis representan ejecución y sus llaves delimitan el bloque del código.

function imprimeSaludo() { //*SIN PARAMETROS
    console.log('hola desde la linea 90');
}
imprimeSaludo() //!ES LLAMADA

//*SIN PARAMETROS
function calculaDescuento(precio, porcentaje){ 
    const descuento = precio * (porcentaje/100)
    console.log(`El descuento del ${porcentaje}% sobre ${precio} es ${ descuento}`);
}
calculaDescuento(200, 40) //!llamamos con parametros



//TODO: Haz una función que espere por parámetros precio y porcentaje y muestre por consola 
// cuando debe pagar cliente después de aplicar el descuento al precio y aplícale el método 
// explicado en clase para fijar a la cantidad resultado precisión de 2 decimales al resultados.
//*SIN PARAMETROS
function calculaPagoConDescuento(precio, porcentaje){ 
    const descuento = precio * (porcentaje/100)
    const totalApagar = precio - descuento
    console.log(`Desbes pagar el total de ${totalApagar} luego de aplicar el descuento de ${porcentaje}% al ${precio}$`);
}
calculaPagoConDescuento(200, 40) //!llamamos con parametros

//*QUE RETORNAN
function retornaMayuscula(stringMinus) {
    return stringMinus.toUpperCase()
}


 console.log(retornaMayuscula('academia ingenio'));

 function doble(num) {
    return num * 2
 }
 console.log(doble(5));
 



//*ARROW FUNCTION

// const funcFlecha = (nombre) => {
//     console.log(`hola soy ${nombre}`);
//     const arrayName = ['mari', 'lore', 'edy']
//     return arrayName 
// }

const funcFlecha = () => ['mari', 'lore', 'edy']

console.log(funcFlecha());


//funcFlecha('Carlos')
//console.log(funcFlecha('Carlos')[1]);




//!Objeto: 
//Colección de pares clave:valor, entre llaves y cada par separado por coma.

const producto = {
    id:'aaqq12',
    nombre:'latop INTEL',
    precio: 200,
    muestraPrecio () {
        console.log(`El precio de este producto es ${this.precio}`);
    },
    descuento: function(descuento) {
        console.log(`El descuento ${descuento}% del precio es ${this.precio*(descuento/100)}`);
    }

}


producto.muestraPrecio()
producto.descuento(20)
console.log(producto.nombre);



//Ya Vimos todos los tipos de datos, 
//?nos falta como comprobarlo con: instanceof y typeof
console.log('Comprobando TDD');
console.log(typeof producto.nombre);// "string"
console.log(typeof producto.precio);// "number"
console.log(typeof 43);// "number"
console.log(typeof retornaMayuscula);// "funcion"


console.log(sabores instanceof Array);// true
console.log(sabores instanceof Function);//false
console.log(sabores instanceof Function);//false
console.log(retornaMayuscula instanceof Function);//true



// console.log(typeof null);// = {}, [] son objteto
// const fun = () => {}
// console.log(typeof fun);// function, es una exepxopn

// console.log([] instanceof Array);// true
// console.log({} instanceof Object);// true
// console.log('Array frutas es', frutas instanceof Object);// true


































