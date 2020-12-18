
const formulario = document.getElementById("Formulario");

formulario.addEventListener("submit", prueba, null);

function prueba(event){
    event.preventDefault();
    console.log(event.target);
};