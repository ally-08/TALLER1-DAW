var guardar=function(){
    var libros=parseInt(document.getElementById("libros").value);
    var cuadernos=parseInt(document.getElementById("cuadernos").value)
    var plumas=parseInt(document.getElementById("plumas").value)

    var tl,tc,tp,t;

    tl=libros*100;
    tc=cuadernos*15.50;
    tp=plumas*2.35;
    t=tl+tc+tp;

   const respuesta=document.getElementById("respuesta");

   respuesta.textContent=`El total de ventas de libros fue: $${tl},
    el total de ventas de cuadernos fue : $${tc},
    el total de ventas de plumas fue : $${tp} y
    el total de ventas fue de: $${t}`
}
function reset() {
    (document.getElementById("libros").value = "");
    (document.getElementById("cuadernos").value = "");
    (document.getElementById("plumas").value = "");
    respuesta.textContent = "";

}