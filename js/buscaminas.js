var minas =document.getElementsByClassName('mina');
var numeros= document.getElementsByClassName('num');
var vacio=document.getElementsByClassName('vacio');
console.log (minas);
//este for recoorre mi arreglo donde están los botones con classe mina y les porne la funcion onclick
for (var i= 0;i< minas.length;i ++){
  minas[i].addEventListener("click", perdiste);
  function perdiste(){
    this.className="minaPresionada";
    alert("game over");
  }
}



//este for recoorre mi arreglo donde están los botones con classenumeros y les porne la funcion onclick
for (var i= 0;i< numeros.length;i ++){
  numeros[i].addEventListener("click", cambiar);
  function cambiar(){
    this.className="numer";
    console.log (numeros);
  }

}

//este for recoorre mi arreglo donde están los botones con classevacio y les porne la funcion onclick
for (var i= 0;i< vacio.length;i ++){
  vacio[i].addEventListener("click", cambiarClase);
  function cambiarClase(){
    this.className="vacioPresionado";
    console.log (vacio);
  }

}

/*for (var i= 0;i< vacio.length;i ++){
  vacio[i].addEventListener("click", cambiar);
}*/
