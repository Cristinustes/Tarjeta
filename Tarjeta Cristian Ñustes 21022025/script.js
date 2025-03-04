var boton = document.getElementById("boton");

function CambiarTexto(){
    var texto=document.getElementById("contenido");
    texto.textContent=" Profesional responsable, honesto, puntual y proactivo, con gran capacidad de adaptación y aprendizaje. Orientado al logro de objetivos, con excelentes habilidades de análisis y trabajo en equipo. ";
}

boton.addEventListener("click",CambiarTexto);
