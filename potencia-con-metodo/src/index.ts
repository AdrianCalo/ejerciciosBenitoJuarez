import "./styles.css";
//creamos array de dimencion desconocida
let dimension: number = Number(prompt("ingrese la dimencion del array"));
let i: number; //variable que funciona como indice
let arragloNuevo: number[] = new Array(dimension);

for (i = 0; i < arragloNuevo.length; i++) {
  arragloNuevo[i] = Number(prompt("ingrese el numero a guardar"));
}

function invertirManual(arragloNuevo: number | any[]) {
  // Guardar de una vez la longitud para hacer más legible el código
  let longitudDelArreglo = arragloNuevo.length;
  // Recorrer arreglo hasta la mitad. Si es impar, se va al entero anterior más
  // próximo. P. ej. 5 / 2 => 2
  for (let x = 0; x < longitudDelArreglo / 2; x++) {
    // Respaldar el valor actual
    let temporal = arragloNuevo[x];
    // Calcular el índice contrario, es decir, el del otro lado de la mitad; el cual irá descendiendo
    let indiceContrario = longitudDelArreglo - x - 1;
    // En el actual ahora está el del otro lado
    arragloNuevo[x] = arragloNuevo[indiceContrario];
    // Y en el otro lado, el que estaba originalmente en el actual
    arragloNuevo[indiceContrario] = temporal;
  }

  // No regresamos nada porque ya modificamos al arreglo internamente
}

invertirManual(arragloNuevo);
console.log(arragloNuevo);

/*----------------------------------------------------*/
