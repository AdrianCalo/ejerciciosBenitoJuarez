import "./styles.css";

/*El DT de los infantiles del equipo de fútbol desea
saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
edades son cargadas al azar (use la función
aleatorio(menorValor, mayorValor), es decir
aleatorio(3,7))
• Muestre todas las edades y el promedio de las
mismas**/

//generamos un numero al azar para la edad
function aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//cargamos el array con las edades
function cargarArray(v: number[], cantidad: number): number {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    v[i] = aleatorio(3, 7); //Number(prompt(`ingrese la edad del jugador ${i+1}`))
  }
}
//mostramos las edades ingresadas de los juagadores

function mostrarArray(v: number[], cantidad: number): number {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    console.log(`el juagdor en la posicion ${i} tiene ${v[i]} años`);
  }
}

//calculamos el promedio
function calcularPromedio(v: number[], cantidad: number): number {
  let i: number;
  let Prom: number;
  let suma: number = 0;
  for (i = 0; i < cantidad; i++) {
    suma = suma + v[i];
  }
  Prom = suma / cantidad;
  return Prom;
}

//calculamos el promedio de las edades de los jugadores
let promedio: number = 0;
let dimArray: number = Number(prompt("indique la cantidad de jugadores"));
let jugadores: number[] = new Array(dimArray);

//aleatorio(3,7);
cargarArray(jugadores, dimArray);
mostrarArray(jugadores, dimArray);
promedio = calcularPromedio(jugadores, dimArray);
console.log(`el promedio de las edades de los jugadores es: ${promedio}`);
