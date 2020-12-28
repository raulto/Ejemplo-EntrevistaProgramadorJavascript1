window.onload = function(){
   // alert("ya cargo")


    const formulario = document.getElementById("formulario");


    formulario.addEventListener("submit",function(event){
        event.preventDefault();
        var formDataElement = new FormData(event.target);
        var datoInput = formDataElement.get("txtTexto");
        console.log(datoInput);
    });

}
