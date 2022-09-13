import "./styles.css";

// capturadores de elementos
const datoU = document.getElementById("datoU");
const datoC = document.getElementById("datoC");
const ingresar = document.getElementById("ingresar");

//se crean variables que contengan el valor de los input
let intentos: number = 0; // sirve para el contador
let usuario: string = "AdrianCalo"; // declaro variable usuario y le asigno valor
let clave: string = "eureka"; //declaro variable clave y le asigno valor

//escucha boton
ingresar.addEventListener("click", () => {
  let claveIngresada: string = datoC.value; //toma los datos que se ingresan en input de clave y le da valor
  let user: string = datoU.value; //toma los datos q se ingresan en input de usuario y le da valor

  if (intentos < 3) {
    if (claveIngresada !== clave && user !== usuario) {
      console.log("Clave o usuario incorrecto intente nuevamente");
      intentos++;
      console.log(intentos);
    } else {
      console.log("clave correcta, bienvenido");
    }
  } else {
    console.log("ya no posee mas intentos");

    //ESta opción deshabilita un elemento (boton en este caso) html
    ingresar.disabled = true;
  }
  datoC.value = ""; //al finalizar el programa los campos del HTML se vacian ya que ingreso que los campos esten vacios
  datoU.value = ""; //al finalizar el programa los campos del HTML se vacian ya que ingreso que los campos esten vacios
});
