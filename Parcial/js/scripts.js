function milisegundos()
{
    var tiempo1 = new Date(2000, 01, 01, 0, 0, 0, 0)
    var tiempo2 = new Date()
    var dif = tiempo1.getTime() - tiempo2.getTime()
    document.getElementById("seg").innerHTML = Math.abs(dif);
}

function tamanoCadena()
{
    document.getElementById("tamano").innerHTML = "Tamaño: " + document.getElementById("cadena").value.length;
}

function diagonalPantalla() 
{
    var w = window.innerWidth;
    var h = window.innerHeight;
    var diag = Math.sqrt( (Math.pow(w, 2) + Math.pow(h, 2)) );
    document.getElementById("diagonal").innerHTML = "<strong>Resolución de la ventana: " + w + " x " + h + '</strong><br> Diagonal: ' + diag;
}

function ventana1()
{
 
    nuevaVentana=window.open("", "primerPunto", "width=300,height=300" );
    nuevaVentana.document.write("<HTML>");
    nuevaVentana.document.write("<HEAD>");
    nuevaVentana.document.write("<TITLE> Primer Punto </TITLE>");
    nuevaVentana.document.write("</HEAD>");
    nuevaVentana.document.write("<BODY>");
    nuevaVentana.document.write("<center><button onclick='milisegundos()'>Milisegundos transcurridos desde Enero 01 del 2020</button>");
    nuevaVentana.document.write("<p id='seg'></p></center>");
    nuevaVentana.document.write("<script src='js/scripts.js'></script>");
    nuevaVentana.document.write("</BODY>");
    nuevaVentana.document.write("</HTML>");
}

function ventana2()
{
 
    nuevaVentana=window.open("", "segundoPunto", "width=300,height=300" );
    nuevaVentana.document.write("<HTML>");
    nuevaVentana.document.write("<HEAD>");
    nuevaVentana.document.write("<TITLE> Segundo Punto </TITLE>");
    nuevaVentana.document.write("</HEAD>");
    nuevaVentana.document.write("<BODY>");
    nuevaVentana.document.write("<center><p>Digite cadena</p><br><input type='text' id='cadena'>");
    nuevaVentana.document.write("<button onclick='tamanoCadena()'>Retornar tamaño cadena</button>");
    nuevaVentana.document.write("<p id='tamano'></p></center>");
    nuevaVentana.document.write("<script src='js/scripts.js'></script>");
    nuevaVentana.document.write("</BODY>");
    nuevaVentana.document.write("</HTML>");
}

function ventana3()
{
 
    nuevaVentana=window.open("", "tercerPunto", "width=300,height=300" );
    nuevaVentana.document.write("<HTML>");
    nuevaVentana.document.write("<HEAD>");
    nuevaVentana.document.write("<TITLE> Tercer Punto </TITLE>");
    nuevaVentana.document.write("</HEAD>");
    nuevaVentana.document.write("<BODY>");
    nuevaVentana.document.write("<center>");
    nuevaVentana.document.write("<button onclick='diagonalPantalla()'>Diagonal pantalla</button>");
    nuevaVentana.document.write("<p id='diagonal'></p></center>");
    nuevaVentana.document.write("<script src='js/scripts.js'></script>");
    nuevaVentana.document.write("</BODY>");
    nuevaVentana.document.write("</HTML>");
}

function ventana4()
{
 
    nuevaVentana=window.open("", "cuartoPunto", "width=300,height=300" );
    nuevaVentana.document.write("<HTML>");
    nuevaVentana.document.write("<HEAD>");
    nuevaVentana.document.write("<TITLE> Modificaciones del objeto Document </TITLE>");
    nuevaVentana.document.write("</HEAD>");
    nuevaVentana.document.write("<BODY>");
    nuevaVentana.document.write("<STYLE>");
    nuevaVentana.document.write("body { background-color: gray; }");
    nuevaVentana.document.write("p { color: white; }");
    nuevaVentana.document.write("</STYLE>");
    nuevaVentana.document.write("<center>");
    nuevaVentana.document.write("<h2>Modificaciones del objeto Document</h2>");
    nuevaVentana.document.write("<p>Texto blanco.</p></center>");
    nuevaVentana.document.write("<script src='js/scripts.js'></script>");
    nuevaVentana.document.write("</BODY>");
    nuevaVentana.document.write("</HTML>");
}