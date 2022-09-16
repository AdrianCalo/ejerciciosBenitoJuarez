/**Construya un algoritmo que tenga un arreglo de dimensión deseada
 por el usuario y llénelo con los nombres que el usuario desee

Crear un arreglo de las posiciones que desee el usuario y llenarlo 
con nombres de personas
Nombres Deseados */

import "./styles.css";
// IMPORTANTE: PARA COMENTAR PRESIONE CTRL + C CTRL + U
// IMPORTANTE: PARA DESCOMENTAR PRESIONE CTRL + K CTRL + U

//let rotulo = document.getElementById("rotulo");
let resultado = document.getElementById("resultado");

//rotulo.innerHTML = "Ejemplo titulo";

//Boton
let btnEnv = document.getElementById("btnEnv");

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //Capturando los valores de los datos
  let largoArreglo: number = Number(
    prompt("ingrese la cantidad de nombres que quiere colocar")
  );
  console.log(largoArreglo);

  let cantidad: string[] = new Array(largoArreglo);

  for (let i = 0; i < cantidad.length; i++) {
    cantidad[i] = prompt("ingrese el nombre");
    console.log(
      `la persona que ingreso  en la posicion ${i} es ${cantidad[i]}`
    );
    resultado.innerHTML = `la persona que ingreso  en la posicion ${i} es ${cantidad[i]}`;
  }
});
