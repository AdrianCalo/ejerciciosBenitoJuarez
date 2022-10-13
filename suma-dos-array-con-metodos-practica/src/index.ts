import "./styles.css";

const calcular = document.getElementById("btnEnv");

let dimension: number = Number(prompt("ingrese la dimension deseada"));

let dato1: number[] = new Array(dimension);
let dato2: number[] = new Array(dimension);
let ArrayRes: number[] = new Array(dimension);

function azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}

function cargarArray(v: number[], cantidad: number): number {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    v[i] = azar(100);
  }
}

function sumaArray(
  v1: number[],
  v2: number[],
  v3: number[],
  cantidad: number
): number {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    v3[i] = v1[i] + v2[i];
  }
}
function mostrarArray(v: number[], cantidad: number): number {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    console.log(v[i]);
  }
}

calcular?.addEventListener("click", () => {
  cargarArray(dato1, dimension);
  cargarArray(dato2, dimension);
  sumaArray(dato1, dato2, ArrayRes, dimension);
  mostrarArray(ArrayRes, dimension);
});
