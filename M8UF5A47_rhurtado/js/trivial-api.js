function accedir(){
    var el_nom = document.getElementById("nom").value;
    var el_cognom = document.getElementById("cognom").value;
    var edat = document.getElementById("major_o_menor").value;

    if (document.getElementById('major_o_menor').value >= 18) {
        if(el_nom && el_cognom){
        window.open("./web/trivial.api.htm")
        localStorage.setItem("major_o_menor", edat)
        }else{
            alert("Has de posar nom i cognom")
        }
        }else {
            alert("No hi pots accedir!:(")
    }
}

var contingut = document.querySelector('#contingut')
function agafar() {
fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
console.log(data.results['0'])
contingut.innerHTML = `
<img src="${data.results['0'].picture.large}"
width="100px" class="img-fluid rounded-circle">
<p>Nombre: ${data.results['0'].name.last}</p>
`
})
}

function comprovar(){
    var resposta1 = "Uruguay";
    var resposta2 = "Cristobal Colon";
    var resposta3 = "David Bisbal";
    var resposta4 = "Amancio Ortega";
    var resposta5 = "Russia";

    if (document.getElementById('primera_resposta').valo == resposta1) {
        document.getElementById('prim_res').innerHTML = resposta1
    }else {
        document.getElementById('prim_res').innerHTML = resposta1
    }
    if (document.getElementById('segona_resposta').valo == resposta2) {
        document.getElementById('seg_res').innerHTML = resposta2
    }else {
        document.getElementById('seg_res').innerHTML = resposta2
    }
    if (document.getElementById('tercera_resposta').valo == resposta3) {
        document.getElementById('terc_res').innerHTML = resposta3
    }else {
        document.getElementById('terc_res').innerHTML = resposta3
    }
    if (document.getElementById('quarta_resposta').valo == resposta4) {
        document.getElementById('quart_res').innerHTML = resposta4
    }else {
        document.getElementById('quart_res').innerHTML = resposta4
    }
    if (document.getElementById('cinquena_resposta').valo == resposta5) {
        document.getElementById('cinq_res').innerHTML = resposta5
    }else {        
        document.getElementById('cinq_res').innerHTML = resposta5
    }
}