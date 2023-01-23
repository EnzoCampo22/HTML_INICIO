document.getElementById("sumar").addEventListener('click', function(){
    let numero1  = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultado = (numero1 + numero2)

    document.getElementById("mostrar_resultado").style.display = "block"
    document.getElementById("resultado_de_la_suma").innerHTML = resultado


})