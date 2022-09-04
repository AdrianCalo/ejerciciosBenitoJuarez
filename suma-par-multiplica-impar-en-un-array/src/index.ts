var n: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumaPar: number;
var multImpar: number;
var par: number = 0;
var impar: number = 1;
for (let i = 0; i < n.length; i++) {
  if (n[i] % 2 === 0)
   par = par + n[i];
  sumaPar = par;
  if (n[i] % 2 !== 0) {
    impar = impar * n[i];
    multImpar = impar;
  }
}
console.log("la suma de los pares es "sumaPar);
console.log("el producto de los impares es "multImpar);

