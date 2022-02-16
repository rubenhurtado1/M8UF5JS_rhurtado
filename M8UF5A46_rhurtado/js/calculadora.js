function numero(op){
    document.getElementById("text").value+=op
}
function resultat(){
    var result=document.getElementById("text").value;
    document.getElementById("text").value=eval(result)
}
function borrar(){
    document.getElementById("text").value=" "
}