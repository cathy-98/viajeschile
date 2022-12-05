$(function(){
$('[data-bs-toggle="tooltip"]').tooltip();

 // click boton enviar
$("#enviar").click(function () {
    alert("El formulario fue enviado :)");
});
})

//scroll
$(document).scroll(function(){
const y = $("html").scrollTop();
  
y > 300 ? $("nav").addClass("nav-black") :$("nav").remvoveClass("nav-black");

})

//insertar datos//
//Insertar correo electrónico//
$("#nombre").click(function () {
    prompt("Ingrese su nombre y apellido", "");
});

$("#asunto").click(function () {
var tituloasunto = prompt("Ingrese el asunto", "");
});
var titulo = document.getElementById ("asunto2")
titulo.innetHTML = tituloasunto; //areglar//

$("#exampleFormControlTextarea1").click(function () {
    prompt("Ingrese  el texto del mensaje", "");
});
