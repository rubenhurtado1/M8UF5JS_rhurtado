function comprovar(){
    var x = document.getElementById("c1").value
    var y = document.getElementById("c2").value
    var z = document.getElementById("usuari").value

    if(z=="Ibai"){
        if(x=="1234" && y=="1234"){
            alert("bien");
        }else{
            alert("mal");
        }
    }else{
        alert("mal");
    }
}
