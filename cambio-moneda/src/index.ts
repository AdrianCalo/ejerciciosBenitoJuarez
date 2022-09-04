import "./styles.css";

const dolar: number = 296;
const libra: number = 345;
const euro: number = 305;
let userPesos: number;
let userMoney: number;
let resultadoFinal: number;

let pesosArg = document.getElementById("pesos");
let otraMoneda = document.getElementById("money");
let btnConv = document.getElementById("cash");
let parrafoRes = document.getElementById("textoFinal");

btnConv.addEventListener("click", () => {
  userPesos = Number(pesos.value);
  userMoney = Number(money.value);

  if (userMoney == 1) {
    resultadoFinal = userPesos / dolar;
    parrafoRes.innerHTML =
      "Tus pesos valen " + resultadoFinal.toFixed(2) + " Dolares";
  } else if (userMoney == 2) {
    resultadoFinal = userPesos / euro;
    parrafoRes.innerHTML =
      "Tus pesos valen " + resultadoFinal.toFixed(2) + " Euros";
  } else if (userMoney == 3) {
    resultadoFinal = userPesos / libra;
    parrafoRes.innerHTML =
      "Tus pesos valen " + resultadoFinal.toFixed(2) + " Libras";
  } else {
    parrafoRes.innerHTML = "Tus pesos valen " + resultadoFinal + " Libras";
    alert("No ingresaste una opcion valida");
  }
});
//metodo tofixed() sirve para redondear un numero a cierta cantidad de decimales
//tbm exite metodo mathround() el cual redondea el numero al valor mas cercano haciendolo entero
