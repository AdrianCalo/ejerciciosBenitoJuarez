import "./styles.css";

/*ENUNCIADO EJERCICIO 3
Realizar una página con un script que calcule el valor de la letra de 
un número de DNI (Documento nacional de indentidad).
El algoritmo para calcular la letra del dni es el siguiente :
•	El número debe tener entre 7 y 8 digitos sin puntos
•	Debemos calcular el resto de la división entera entre el número y el 
número 23. E.g: 31391317 mod 23 = 20
•	Según el resultado, de 0 a 22, le corresponderá una letra de las 
siguientes:(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
•	Si lo introducido no es un número deberá indicarse con un alert 
y volver a preguntar.
•	Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/

const DNI = document.getElementById("dato"); //capturamos elementos del input
const rotulo = document.getElementById("rotulo"); //capturamos elemento del rotulo
const calcular = document.getElementById("btnEnv"); //capturamos boton

//creamos el array que contiene las letras para asiganar
let letra: string[] = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E"
];
// creamos funcion que calculara el modulo y asiganara letra a ese valor
function asignar() {
  let result: number;
  result = DNI.value % 23;
  for (let i = 0; i < letra.length; i++) {
    if (result === i) {
      rotulo?.innerHTML = `La letra asignada a su DNI N° ${DNI.value} es ${letra[i]}`; //imprime en pantalla
    }
  }
}
//creamos funcion que revisa que el valor ingresado este dentro de los parametros
function revision(x: number) {
  if (1000000 < x && x < 99999999) {
    asignar();
  } else {
    alert(
      "el numero ingresado no se encuentra entre los parametros establecidos"
    );
  }
}
//escuchamos el click en el boton y da inicio al programa
calcular?.addEventListener("click", () => {
  revision(DNI.value);
  asignar();
});
