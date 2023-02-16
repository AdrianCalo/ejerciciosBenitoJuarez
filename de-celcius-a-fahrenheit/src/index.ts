import "./styles.css";

/*Crear un programa donde el usuario ingrese 
en un prompt la temperatura en Celcius y el programa 
muestre en una alerta la temperatura en Fahrenheit.*/

let temp: number = Number(prompt("ingrese la temperatura"));

function cambio(t: number): number {
  let result: number;
  result = (t * 9) / 5 + 32;
  return result;
}

console.log("el equivalente a", temp, "°C es", cambio(temp), "Fahrenheit");
