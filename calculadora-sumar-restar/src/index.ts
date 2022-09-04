//capturamos los rotulos y con innetHTML le decimos que tiene que decir
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese el primer numero:";
rotulo2.innerHTML = "Ingrese el segundo numero:";
rotulo3.innerHTML =
  "Ingrese la opcion deseada Presione 1 para sumar y 2 para restar:";

//capturamos el boton
let btn = document.getElementById("btnEnv");

//escuchamos el boton
btn.addEventListener("click", () => {
  //capturamos los input
  let num1: number = document.getElementById("numero1").value;
  let num2: number = document.getElementById("numero2").value;
  let opc: string = document.getElementById("opcion").value;

  //dibujamos lineas
  let linea: string = "-";

  //creamos lineas conmsecutivas
  for (let i = 0; i <= 40; i++) {
    linea = linea + "-";
  }

  //operacion matematica logica
  if (opc === "1") {
    console.log(linea);
    console.log("el resultado es:", Number(num1) + Number(num2));
    console.log(linea);
  }
  if (opc === "2") {
    console.log(linea);
    console.log("el resultado es:", Number(num1) - Number(num2));
    console.log(linea);
  } else {
    alert("Usted a ingresado una opcion invalida");
  }
});
