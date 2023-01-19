let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

var fruta = 6;
//iteracion de resta//
for(fruta; fruta >= 0; fruta--){
    if(fruta == 0){
        console.log("la canasta se vació")
        break;
    }
    console.log("la cantidad de frutas en la canasta es "+fruta);

}
//iteracion de suma
var manzana = 0

for(manzana; manzana >=0; manzana++){
    if(manzana == 6){
        console.log("la canasta de manzana se lleno "+manzana);
        break
    }
    
   console.log("se sumo una manzana a la canasta "+manzana) 
}