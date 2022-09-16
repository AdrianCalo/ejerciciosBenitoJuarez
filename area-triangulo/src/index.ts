import "./styles.css";

//Realice un programa que devuelva el área del
//triangulo usando los siguientes pares de base-altura:
//• (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
//• Implemente un método llamado calcularAreaTriangulo
//que reciba dos números por parámetro (uno llamado
//base y otro altura)

//se capturan elementos html
const btnEnv = document.getElementById("btnEnv");
const list = document.getElementById("lista"); // Se declara la variable "list"
const texArea = document.getElementById("pFinal");

//se crean variables en los que van a estar los valores ingrsados por el usuario
let areaTriangulo: number;
let baseU = Number(prompt("Introdusca el valor de la base"));
let alturaU = Number(prompt("Introdusca el valor de la altura"));

//se  crea funcion que calcula el area
function calcularAreaTriangulo(base: number, altura: number): number {
  areaTriangulo = (base * altura) / 2;
  return (base * altura) / 2;
}

for (let i = 1; i <= 7; i++) {
  console.log("el area del triangulo es:", calcularAreaTriangulo(i, i * 2));
  const li = document.createElement("li"); // Se crea y se declara el elemento "li"
  li.innerText = `${i}*${i * 2}=` + areaTriangulo;
  list.appendChild(li); // Inserta un nuevo elemento en la pantalla, en este caso un texto.
}

btnEnv.addEventListener("click", () => {
  console.log(
    "el area del triangulo ingresado por el usuario es",
    calcularAreaTriangulo(baseU, alturaU)
  );
  texArea.innerHTML = `${baseU}*${alturaU}=` + areaTriangulo;
});
