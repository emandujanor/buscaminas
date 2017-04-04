var minas =document.getElementsByClassName('mina');
var numeros= document.getElementsByClassName('num');
var vacio=document.getElementsByClassName('vacio');
var jugar= document.getElementById('jugar');
console.log (minas);
jugar.addEventListener("click", recargar);
function recargar(){
  location.reload()
}

//este for recoorre mi arreglo donde están los botones con classe mina y les porne la funcion onclick
for (var i= 0;i< minas.length;i ++){
  minas[i].addEventListener("click", perdiste);

}
function perdiste(){
  this.className="minaPresionada";
  alert("game over")
  //button.removeEventListener("click");

}


//este for recoorre mi arreglo donde están los botones con classenumeros y les porne la funcion onclick
for (var i= 0;i< numeros.length;i ++){
  numeros[i].addEventListener("click", cambiar);


}

function cambiar(){
  this.className="numer";
  var numero=this.value;
  this.innerHTML=numero;
  console.log (numeros);
}
//este for recoorre mi arreglo donde están los botones con classevacio y les porne la funcion onclick
for (var i= 0;i< vacio.length;i ++){
  vacio[i].addEventListener("click", cambiarClase);
  function cambiarClase(){
    this.className="vacioPresionado";
    console.log (vacio);
  }

}
