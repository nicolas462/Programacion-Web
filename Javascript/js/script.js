/**
 *      JAVASCRIPT EN UN ARCHIVO EXTERNO
 */

ocument.getElementById("botonBuscar").onclick = function() {
    buscar(document.getElementById("numeroBuscar").value, List)};

function bubbleSort( arreglo )
{
    for (let i = 0; i < arreglo.length; i++ ) {
        for (let j = 0; j < arreglo.length - 1 - i; j++ ) {
          if ( arreglo[ j ] > arreglo[ j + 1 ] ) {
            [ arreglo[ j ], arreglo[ j + 1 ] ] = [ arreglo[ j + 1 ], arreglo[ j ] ];
          }
        }
    }

    document.getElementById("ordenado").innerHTML =  "El arreglo ordenado es: " + List + '<br><br>'
                                                    + "Ingrese número a buscar: ";
    document.getElementById("botonBuscar").innerHTML =  "Buscar";
}

function binarySearch(value, list) 
{
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}

function buscar(numero, arreglo)
{
    
    document.getElementById("busqueda").innerHTML = "AAAAAAAAAA";
    var resultado = binarySearch(numero, arreglo);
    if (resultado != -1)
        document.getElementById("busqueda").innerHTML = "El número se encuentra en la posición " + resultado + " del arreglo.";
    else
        document.getElementById("busqueda").innerHTML = "El número no se encuentra en el arreglo."
}