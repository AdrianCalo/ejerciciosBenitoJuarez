import "./styles.css";
//Almacene en un arreglo de dimensión N números (la
//  cantidad es ingresada por el usuario)
//  • Muestre cuántos números son positivos, cuántos son
//  negativos y cuántos ceros hay
//  56
//  Ejemplo:
//  v = 0, -7, -9, 1, 0, 0
//  La salida es: 1 positivos, 2 negativos y 3

/*este anda sin problemas.. solo que me dice que NaN 
como que no es un numero. no se donde puede estar el error.. porqeu a los valores 
los carga el cpu, en la funcion la ejecuta bien haciendo operaciones y demas. 
y dps esta todo declarado como number

Fijate en la linea 40, 41 y 42, Inicialize los valores en Cero. Y Ahi arranco.
2 Cosas que he aprendido por errores:
1. Cuando asignes una variable de tipo number, si el ciclo for no corta en "<" o ">" que, las varables se inician en cero.
Si es "<=" o ">=" no es necesario que lo tengan.
2. Cuando asignes una variable de tipo string, proba que no tenga valor, o que su valor sea "".
Cuando tengo problemas de NaN o Undefined, es lo primero que pruebo.*/

let dimension: number = Number(prompt("ingrese la dimension deseada"));
let array: number[] = new Array(dimension);

//creamos la funcion azar, la cual genera numeros con el metodo .random()
//el cual genera numeros cuales quiera entre 0 y 0.999 todos positivos por lo que hay que multiplicarlos
//en este caso por 100 para que sean numeros mas grandes
//para que algunos sean negativos al metodo random le resto 0.5 asi solo toma la mitad de los valores.
function azar(tope: number): number {
  return Math.round((Math.random() - 0.5) * tope);
}
//cargamos el array con la funcion azar
for (let i = 0; i < array.length; i++) {
  array[i] = azar(100);
}

console.log(array);
// creamos variables para guardar los datos
let negativo: number = 0;
let positivo: number = 0;
let zero: number = 0;

//recorremos el array y evaluamos si son positivos 0 negativos o cero y los guardamos ne una variable
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativo++;
  } else if (array[i] > 0) {
    positivo++;
  } else {
    zero++;
  }
}

console.log(negativo);
console.log(positivo);
console.log(zero);
console.log(
  `dentro del array hay ${negativo} negativos, ${positivo} positivos y ${zero} ceros`
);
