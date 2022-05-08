//FUNCIONAL INGRESO DE DATOS //

/*let dato = <HTMLInputElement>document.getElementById("dato");
let btnEnviar = <HTMLElement>document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  dato.innerHTML = "Introducza dato";
  dato = dato.value;
  console.log("mi nombre es", dato);
});*/

let vocalConsonante = <HTMLInputElement>(
  document.getElementById("vocalConsonante")
);
let btnEnviar = <HTMLElement>document.getElementById("btnEnviar");
let letra: string = "consonante";
btnEnviar.addEventListener("click", () => {
  //aca va el codigo//
  vocalConsonante.innerHTML = "letra que se ingresa";
  letra = vocalConsonante.value;
  if (letra == "vocal") {
    console.log("es vocal");
  } else if (letra != "vocal") {
    console.log("es consonante");
  }
});
