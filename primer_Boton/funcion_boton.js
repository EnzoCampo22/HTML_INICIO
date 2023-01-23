/** 
document.addEventListener('click',function(){

    

    console.log("aca aplico el eventlistener");


    document.getElementById("demo").innerHTML = "aplicando javascript con eventlistener";

})
*/
document.getElementById("boton_Magico").addEventListener('click',function(){
    console.log("esto lo vemos nosotros nomas");


    document.getElementById("demo").innerHTML = "aplicando javascript";


})

document.getElementById("cambiar_fondo").addEventListener('click',function(){
    document.body.style.backgroundColor = 'red'

})

document.getElementById("reestablecer_fondo").addEventListener('click', function(){

    document.body.style.backgroundColor = 'black'

})


const collection = document.getElementsByClassName("parrafo_prueba");

for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "red";
}

/**
 const collection = document.getElementsByClassName("example");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}
 */