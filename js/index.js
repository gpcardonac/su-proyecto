//capturar texto en un formulario.  La captura de datos se observa en 
//la consola pulsando F12.  Si se borra y se agrega otro nombre y numero
//de teléfono, en la consola se observa que se guardan los datos a capturar.

function captura(){
    var nombreest=document.getElementById("nombreest").value;
    var celuest=document.getElementById("celest").value;
    console.log(nombreest +" "+celuest);
}