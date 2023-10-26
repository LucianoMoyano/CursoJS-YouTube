// ¿Que es una variable? Una Variable es un contenedor que guarda información para luego, usarla. 


/* 
 - Variables:

var: Es una forma mucho mas flexible de declrar una varibale. Ya que nos permite redeclarar la misma variable con el mismo nombre y modificar su valor.
*/

if(true){
    var palabra = "Suscribite al canal"
}

console.log(palabra)


/*
let: Permite actualiza o modificar el valor de una variable, pero no volver a declarar otra variable con el mismo nombre. 
*/

let palabra2 = "Bienvenidos al curso"

if(true){
    let palabra2 = "Bienvenidos al curso de javascript"
    console.log(palabra2)
}

console.log(palabra2)



/*
const: Permite crear una variable con un nombre y un valor, pero no nos deja redeclararla o modificar ese valor del principio. 

*/

const numero = 256










/*
Tipos de Datos:

Primitivos: string, number, boolean, undefined, null, NaN
Complejos: Array, Objeto, Funcion
*/

//Strings: Son cadenas de caracteres que incluyen letras, numeros, espacios. Se tiene que encerrar mediante comillas simples o comillas dobles o backticks para que JS interprete entienda que es un texto.

let nombre = "Luciano "


//number: Funcionan igual que en las matematicas. Pueden ser numeros enteros y numeros racionales. Se pueden suar, restar, multiplicar y dividir y van a seguir una logica de resolucion, que va a privilegiar a las operaciones que esten dentro de los parentesis.

let numeros = 28



//boolean: Son datos de tipo true (verdaderos) y false (falso), es decir, que activan o esactivan parte del programa que se este ejecutnado.

let estaViva = true


//undefined: ES un valor que tiene una variable que todavia no se definidio.

let direccion;

//Null: Es un valor que posee una variables que esta explicitamente vacia.


let direccion2 = null





/* 

EJERCICIO:

/* 
- Declara 3 variables. Siempre teniendo en cuenta que los nombres deben ser descriptivos:
    Numérica
    String
    Booleana
- Mostrarlas por la consola en 3 console.log distintos (uno por cada variable)
- Ahora modifica tus console.log para que ahora se muestran las 3 variables en el mismo console.log

*/