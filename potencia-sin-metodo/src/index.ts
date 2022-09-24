import "./styles.css";

let base: number = Number(prompt("ingrese el numero base"));
let exp: number = Number(prompt("ingrese el valor exponencial"));
let resultado: number;

resultado = Math.pow(base, exp);
console.log(resultado);
