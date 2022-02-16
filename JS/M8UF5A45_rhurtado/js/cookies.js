function comprovar(){
    var contraseña = document.getElementById("c1").value
    var contraseña2 = document.getElementById("c2").value
    var usuari = document.getElementById("usuari").value

    if(usuari){
        if(usuari==localStorage.getItem("registre_usuari")&&contraseña==localStorage.getItem("registre_contraseña")){
            alert("benvingut")
        }else{
            if(contraseña==contraseña2){
                localStorage.setItem("registre_usuari",usuari)
                localStorage.setItem("registre_contraseña",contraseña)
                alert("s'han guardat les dades")
            }else{
                alert("mal");
            }
        }
    }else{
        alert("mal");
    }
}

function guardar(){
    var nom_doc = document.getElementById("nom").value;
    var cognom_doc = document.getElementById("cognom").value;
    document.cookie = nom+"="+nom_doc;
    document.cookie = cognom+"="+cognom_doc;
    localStorage.setItem("el_nom", nom_doc)
    localStorage.setItem("el_cognom", cognom_doc)
}

function recuperar(){
    var recuperar_nom = localStorage.getItem("el_nom")
    var recuperar_cognom = localStorage.getItem("el_cognom") 
    document.getElementById("nom").value=recuperar_nom
    document.getElementById("cognom").value=recuperar_cognom

}

function esborrar(){
    localStorage.removeItem("el_nom")
    localStorage.removeItem("el_cognom")
}
