//• Diseñar un algoritmo que
//lea números enteros hasta
//teclear 0
//• Determinar y mostrar el
//máximo, el mínimo y la
//media de todos los
//números ingresados
//• Pensar cuidadosamente
//cómo debemos inicializar
//las variables

let num: number = Number(prompt("ingrese un num"));

let max: number;
let min: number;
let Promedio: number = 0;

let suma: number = 0;
let contador: number = 0;

min = num; //se pone p que se inicie con el primer valor que ingresa el user
max = num; //se pone p que se inicie con el primer valor que ingresa el user

while (num !== 0) {
  if (num < min) {
    min = num;
  } else if (num > max) {
    max = num;
  }
  suma += num; //sum= sum + num
  contador++;
  num = Number(prompt("ingrese un num"));
}
if (contador > 0) {
  Promedio = suma / contador;
  console.log(`el minimo es ${min}`);
  console.log(`el maximo es ${max}`);
  console.log(`el promedio es ${Promedio}`);
} else {
  console.log("no ingresaste ningun numero");
}

//en max y min me tira indefinido arreglar
//ya solucione pero preguntar si solo toma el valor de num para el inicio
