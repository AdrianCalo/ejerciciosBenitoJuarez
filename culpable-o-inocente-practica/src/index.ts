import "./styles.css";

//ENUNCIADO EJERCICIO 1
//Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
//•	En caso afirmativo el usuario responderá si
//•	En caso contrario responderá no.
//•	Si el usuario responde si se escribirá por el documento «irás a la cárcel».
//•	Si el usuario responde no se escribirá por el documento web «irás a casa».
//•	En cualquier caso en el documento web se escribirá «la documentación por favor».

//capturamos elementos del HTML
const nombreU = document.getElementById("datoU");
const boton = document.getElementById("ingresar");
const pedido = document.getElementById("solicitud");
const acusacion = document.getElementById("textoFinal");

boton?.addEventListener("click", () => {
  let user: string = prompt("¿Usted es culpable?");
  pedido.innerText = "la documentacion por favor";

  if (user === "si") {
    acusacion?.innerText = `${nombreU.value} iras a la carcel`;
    console.log(`${nombreU.value} iras a la carcel`);
  } else {
    acusacion?.innerText = `${nombreU.value} iras a casa`;
    console.log(`${nombreU.value} iras a casa`);
  }
});
//no me imprime en el documento.. el nombre que toma del usuario.. al igual que en la consola me pone[object HTMLInputElement]
