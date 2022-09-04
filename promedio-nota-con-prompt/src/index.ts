let nota: number = 0;
let total: number = 0;
let promedio: number = 0;

for (let contador = 0; contador < 10; contador++) {
  nota = Number(prompt(`ingrese la nota`));
  total = total + nota;
}
promedio = total / 10;
console.log("el promedio " + promedio);
