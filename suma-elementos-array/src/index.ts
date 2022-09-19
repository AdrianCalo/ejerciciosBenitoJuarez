import "./styles.css";

/*Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario*/

//creamos variable para que el usuario ingrese la dimension que desea del array
let dimensionN: number = Number(prompt("ingrese la dimencion del array"));
let array: number[] = new Array(dimensionN);
let result: number = 0;
//let i: number;
// la longuitud del array esta dada en la variable,
//NO se debe poner .lenght porque no ingresa al for.. (si tenes el dato de la longitud del array, siempre usarla)

for (let i = 0; i < dimensionN; i++) {
  array[i] = Number(prompt(`coloque el numero que va en la posicion ${i}:`));
  result = result + array[i];
}
for (let i = 0; i < dimensionN; i++) {
  console.log(`el numero en la posicion ${i} es ${array[i]}`);
}

console.log(`la suma del array es: ${result}`);
console.log(array);
