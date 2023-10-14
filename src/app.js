import "./style.css";

let quien = ["Un perro", "Un gato", "Un pajaro"];
let accion = ["se comio", "se robo", "se llevo"];
let que = ["mi almuerzo", "mi desayuno", "mi cena"];
let cuando = ["en el trabajo", "en el parque", "en el cerro"];

function generarExcusa() {
    let randomNumber = Math.floor(Math.random() * 3);
    let excusaGenerada = `${quien[randomNumber]} ${accion[randomNumber]} ${que[randomNumber]} ${cuando[randomNumber]}`;
  
    let elementoExcusa = document.getElementById("excusa");
    elementoExcusa.innerHTML = excusaGenerada;
  }
  
  window.onload = function() {
    generarExcusa();
  };