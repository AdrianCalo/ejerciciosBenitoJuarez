import "./styles.css";

const calcular = document.getElementById("btnEnv");

let alumnos: number = Number(prompt("ingrese la cantidad de alumnos"));

function comparaNum(x: number): number {
  if (40 >= alumnos && alumnos > 35) {
    console.log("deben ir a la salita AZUL");
  } else if (35 >= alumnos && alumnos > 30) {
    console.log("deben ir  a la salita VERDE");
  } else {
    console.log("deben ir a la salita AMARILLA");
  }
}

calcular?.addEventListener("click", () => {
  comparaNum(alumnos);
});
