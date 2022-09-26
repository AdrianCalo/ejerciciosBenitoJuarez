import "./styles.css";

/*Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
• Luego de resolverlo, pensar en
aprovechar métodos y discutir
como representar la información*/

const calcular = document.getElementById("btnEnv"); //caturamos el boton
const rotulo = document.getElementById("rotulo"); //capturamos el rotulo

let alumnos: string = prompt("ingrese el nombre del alumno");
let notas: number = 0; // notas de los alumnos
let result: number = 0; // se crea para ir guardando las notas que se reciven mientras se suman
let promedio: number = 0; // para tener el resultado promediado
//escuchamos el click en el boton
calcular?.addEventListener("click", () => {
  if (alumnos !== "0") {
    for (let i = 0; i < 3; i++) {
      notas = Number(prompt("ingrese notas a promediar"));
      result += notas;
      promedio = result / 3;
    }
  }
  console.log(`el promedio del alumno ${alumnos} es ${promedio}`);
  rotulo?.innerHTML =
    "el promedio del alumno" + alumnos + " es " + promedio.toFixed(2);
});
