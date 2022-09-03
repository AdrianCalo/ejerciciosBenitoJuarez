import "./styles.css";

const Bultos = document.getElementById("Bultos");
const precioxUnidad = document.getElementById("precioUnidad");
const btnEnviar = document.getElementById("btnEnviar");
const pFinal = document.getElementById("textoFinal");

var subtotal: number = 0;
var precioFinal: number = 0;
var mercaderia: number = 0;
var valor: number = 0;

btnEnviar.addEventListener("click", () => {
  mercaderia = Number(Bultos.value);
  valor = Number(precioxUnidad.value);

  subtotal = mercaderia * valor;
  if (subtotal >= 1000) {
    precioFinal = subtotal - (subtotal * 10) / 100;
    console.log("monto a pagar " + subtotal);
    pFinal.innerHTML = "su monto a pagar con descuento es " + precioFinal;
  } else {
    pFinal.innerHTML = "su monto a pagar es " + subtotal;
  }
});
