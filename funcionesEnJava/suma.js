document.getElementById("sumar").addEventListener('click', function(){
    let numero1  = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultado = (numero1 + numero2)

    document.getElementById("mostrar_resultado").style.display = "block"
    document.getElementById("resultado_de_la_suma").innerHTML = resultado


})
{

var x = document.getElementById("pruebalocalizacion")

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML = "el servicio de geolocalizacion no está permitida en este navegador"
    }
    
}

function showPosition(position){
    x.innerHTML = "latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;
}



}