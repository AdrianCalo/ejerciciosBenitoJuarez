var num: number = Number(prompt("ingrese numero de tabla a visualizar"));
var limit: number = Number(prompt("hasta que numero desea multiplicar"));

var resultado: number = 0;

for (let i: number = 1; i <= limit; i++) {
  resultado = num * i;
  console.log(`${num} * ${i} = ${i * num}`);
}
