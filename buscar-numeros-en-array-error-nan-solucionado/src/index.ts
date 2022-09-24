import "./styles.css";
/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos*/


let base: number= Number(prompt("ingrese el numero base"));
let exp: number= Number(prompt("ingrese el valor exponencial"));
let resultado: number=1;

if(exp < 0){
  alert("ingrese un valor igual a 0 o superior");
}

if(exp === 0){
  console.log("el resultado es: 1");
}

for (let i = 1; i<= exp ; i++){
  resultado= base* resultado
}
console.log(resultado);
