let nuevoNum: number = Number(prompt("ingrese numero"));
let positivoNum: number = 0;
let totalNum: number = 0;

while (nuevoNum !== 0) {
  if (nuevoNum > 0) {
    positivoNum++;
  }
  totalNum++;
  nuevoNum = Number(prompt("ingrese numero"));
}
const PosNumPorcentaje: number = (positivoNum * 100) / totalNum;
console.log(
  `positivos: ${positivoNum} / porcentaje de positivos: ${PosNumPorcentaje}`
);
