function crear(){
    var filas=parseInt(document.getElementById("filas").value);
    var columnas=parseInt(document.getElementById("columnas").value);

    for(j=0;j<filas;j++){
        contador=contador+1;
        document.write("<tr>");
        for(i=0;i<=columnas;i++){
            Math.floor(Math.random()*(100-0)+min);

            document.write("<td>"+num+"</td>");
        }
        document.write("</tr>");
    }

    document.write("</table>");

    document.write("<br><br><br>")

   
    
    document.write("</table>");
}

function reset() {
    (document.getElementById("filas").value = "");
    (document.getElementById("columnas").value = "");
    tabla.textContent = "";

}