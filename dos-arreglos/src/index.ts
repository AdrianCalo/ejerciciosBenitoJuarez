import "./styles.css";

let nombres: string[] = new Array(2);
let numeros: number[] = new Array(3);

for (let i = 0; i < nombres.length; i++) {
  nombres[i] = prompt("ingrese un nombre");
}

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = Number(prompt("ingrese un numero"));
}

console.log(`${nombres}`);

console.log(`${numeros}`);
