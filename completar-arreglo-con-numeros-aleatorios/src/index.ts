import "./styles.css";

//Llenar un array de 10 posiciones con números
//aleatorios entre 0 y 99
//• Para obtener números aleatorios crear una función
//Azar, que se base en las funciones disponibles en el
//paquete Math:
//-Math.random() devuelve un nro al azar entre 0 y 1.

let array: number[] = new Array(10);

function azar(tope: number): number {
  return Math.round(Math.random() * tope);
}

for (let i = 0; i < 10; i++) {
  array[i] = azar(100);
  console.log(`el numero en la posicion ${i} es : ${array[i]}`);
}

//math.ramdom designa un valor cualquiera de numero real.
// para que sea un valor entero hay que agregar math.floor
// sintaxis math.floor(math.ramdom)
// sino Math.round() que redondea los valores a los cercanos
