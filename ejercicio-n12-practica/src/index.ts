import "./styles.css";
//crea una funcion que reciba 2 parametros, precio e iva,
//y devuelva el precio con iva incluido. si no recibe el iva,
//aplicara el 21 por ciento por defecto.

let precio: number = Number(prompt("ingrese el precio"));
const iva: number = Number(prompt("ingrese el iva"));
let resultado: number;

function calcular(x: number, i: number): number {
  if (i > 0) {
    resultado = x + (x * i) / 100;
  } else {
    resultado = x + x * 0.21;
  }
  console.log(resultado);
}

calcular(precio, iva);
