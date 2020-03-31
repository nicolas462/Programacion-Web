for (i = 1; i <= 37; i++)
    document.getElementById("option").innerHTML +='<option value="'+i+'">'+i+'</option>';

/**
 * Obtiene el valor del select y genera el código de cada ejercicio.
 */
function getValue()
{
    x = parseInt(document.getElementById('option').value);
    switch (x)
    {
        case 1:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese número: </p>'+
                '<input type="text" id="numeroPar">'+
                '<button id="boton" onclick="punto1();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 2:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese primer número: </p>'+
                '<input type="text" id="numero1">'+
                '<p style="display: inline;">Ingrese segundo número: </p>'+
                '<input type="text" id="numero2">'+
                '<p style="display: inline;">Ingrese tercer número: </p>'+
                '<input type="text" id="numero3">'+
                '<button id="boton" onclick="punto2();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 3:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese primer número: </p>'+
                '<input type="text" id="numero1">'+
                '<p style="display: inline;">Ingrese segundo número: </p>'+
                '<input type="text" id="numero2">'+
                '<p style="display: inline;">Ingrese tercer número: </p>'+
                '<input type="text" id="numero3">'+
                '<button id="boton" onclick="punto3();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 4:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese primer número: </p>'+
                '<input type="text" id="numero1">'+
                '<p style="display: inline;">Ingrese segundo número: </p>'+
                '<input type="text" id="numero2">'+
                '<button id="boton" onclick="punto4();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 5:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese año: </p>'+
                '<input type="text" id="numero">'+
                '<button id="boton" onclick="punto5();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 6:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese nombre: </p>'+
                '<input type="text" id="nombre">'+
                '<p style="display: inline;">Ingrese número de horas trabajadas: </p>'+
                '<input type="text" id="horasTrabajadas">'+
                '<p style="display: inline;">Ingrese valor hora : </p>'+
                '<input type="text" id="valorHora">'+
                '<p style="display: inline;">Ingrese valor salario mínimo mensual: </p>'+
                '<input type="text" id="salarioMinimo">'+
                '<button id="boton" onclick="punto6();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 7:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese número de escritorios: </p>'+
                '<input type="text" id="numero">'+
                '<button id="boton" onclick="punto7();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 8:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Número de créditos: </p>'+
                '<input type="text" id="creditos">'+
                '<p style="display: inline;">Valor créditos: </p>'+
                '<input type="text" id="valorCreditos">'+
                '<p style="display: inline;">Estrato del estudiante: </p>'+
                '<input type="text" id="estrato">'+
                '<button id="boton" onclick="punto8();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 9:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Peso mercancía: </p>'+
                '<input type="text" id="pesoMercancia">'+
                '<p style="display: inline;">Valor de la mercancía: </p>'+
                '<input type="text" id="valorMercancia">'+
                '<p style="display: inline;">¿Es Lunes?: </p>'+
                '<select id="dia""><option value="si">Sí</option><option value="no">No</option></select>'+
                '<p style="display: inline;">Tipo de pago: </p>'+
                '<select id="tipoPago""><option value="efectivo">Efectivo</option><option value="tarjeta">Tarjeta</option></select>'+
                '<button id="boton" onclick="punto9();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 10:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Costo de compra: </p>'+
                '<input type="text" id="CC">'+
                '<p style="display: inline;">Tipo de producto: </p>'+
                '<select id="TP""><option value="perecedero">Perecedero</option><option value="noPerecedero">No perecedero</option></select>'+
                '<p style="display: inline;">Tipo de conservacion: </p>'+
                '<select id="TC""><option value="frio">Frio</option><option value="ambiente">Ambiente</option></select>'+
                '<br><br><p style="display: inline;">Periodo de conservación (días): </p>'+
                '<input type="text" id="PC">'+
                '<p style="display: inline;">Periodo de almacenamiento (días): </p>'+
                '<input type="text" id="PA">'+
                '<br><br><p style="display: inline;">Volumen (litros): </p>'+
                '<input type="text" id="VOL">'+
                '<p style="display: inline;">Medio de almacenamiento: </p>'+
                '<select id="MA""><option value="nevera">Nevera</option><option value="congelador">Congelador</option><option value="estanteria">Estantería</option><option value="guacal">Guacal</option></select>'+
                '<button id="boton" onclick="punto10();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 11:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ruta: </p>'+
                '<select id="ruta""><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>'+
                '<p style="display: inline;">Número de viajes: </p>'+
                '<input type="text" id="numeroViajes">'+
                '<p style="display: inline;">Número pasajeros total: </p>'+
                '<input type="text" id="numeroPasajeros">'+
                '<br><br><p style="display: inline;">Número de encomiendas menos de 10kg: </p>'+
                '<input type="text" id="encomiendasMenos">'+
                '<br><br><p style="display: inline;">Número de encomiendas entre 10kg y menos de 20kg: </p>'+
                '<input type="text" id="encomiendasMitad">'+
                '<br><br><p style="display: inline;">Número de encomiendas de más de 20kg: </p>'+
                '<input type="text" id="encomiendasMayor">'+
                '<button id="boton" onclick="punto11();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 12:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">¿Cuántos números desea?: </p>'+
                '<input type="text" id="n">'+
                '<button id="boton" onclick="punto12();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 13:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese número: </p>'+
                '<input type="text" id="n">'+
                '<button id="boton" onclick="punto13();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 14:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">¿Cuántos términos desea?: </p>'+
                '<input type="text" id="n">'+
                '<p style="display: inline;">Digite el valor de x: </p>'+
                '<input type="text" id="x">'+
                '<button id="boton" onclick="punto14();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 15:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">¿Cuántos términos desea?: </p>'+
                '<input type="text" id="n">'+
                '<p style="display: inline;">Digite el valor de x: </p>'+
                '<input type="text" id="x">'+
                '<button id="boton" onclick="punto15();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 16:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Ingrese el valor de a: </p>'+
                '<input type="text" id="a">'+
                '<p style="display: inline;">Ingrese el valor de b: </p>'+
                '<input type="text" id="b">'+
                '<p style="display: inline;">Ingrese el valor de c: </p>'+
                '<input type="text" id="c">'+
                '<button id="boton" onclick="punto16();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 17:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">¿Cuántos números desea?: </p>'+
                '<input type="text" id="n">'+
                '<button id="boton" onclick="punto17();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 18:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">¿Cuántos números desea?: </p>'+
                '<input type="text" id="n">'+
                '<button id="boton" onclick="punto18();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 19:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">¿Cuántos primos desea?: </p>'+
                '<input type="text" id="n">'+
                '<button id="boton" onclick="punto19();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 20:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">¿Cuántos primos desea?: </p>'+
                '<input type="text" id="n">'+
                '<button id="boton" onclick="punto20();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 21:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Digite términos de precisión que desea: </p>'+
                '<input type="text" id="n">'+
                '<button id="boton" onclick="punto21();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
        case 22:
            document.getElementById('content').innerHTML =
            '<div class="contentChild">'+
                '<p style="display: inline;">Digite términos de precisión que desea: </p>'+
                '<input type="text" id="n">'+
                '<button id="boton" onclick="punto22();">Verificar</button>'+
                '<p id="resultado"></p>'+
            '</div>';
        break;
    }
}