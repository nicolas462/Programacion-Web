
function punto1()
{
    var x = parseInt(document.getElementById('numeroPar').value);
    if (!isNaN(x)) // Verifica si es un número
    {
        if (x % 2 == 0)
            document.getElementById('resultado').innerHTML = 'El número: '+x+', es par.';
        else
            document.getElementById('resultado').innerHTML ='El número: '+x+', es impar.';
    }else
        alert("Entrada no válida");
}

function punto2()
{
    var x = parseInt(document.getElementById('numero1').value);
    var y = parseInt(document.getElementById('numero2').value);
    var z = parseInt(document.getElementById('numero3').value);
    if (!isNaN(x) && !isNaN(y) && !isNaN(z)) // Verifica si es un número
    {
        if(x == y || y == z || x == z)
            alert("Hay valores iguales");
        if(x > y && x > z)
            document.getElementById('resultado').innerHTML = 'El número: '+x+', es el mayor.';
        if(y > x && y > z)
            document.getElementById('resultado').innerHTML = 'El número: '+y+', es el mayor.';
        if(z > x && z > y)
            document.getElementById('resultado').innerHTML = 'El número: '+z+', es el mayor.'; 
    }else
        alert("Verifique los valores ingresados");
}

function punto3()
{
    var x = parseInt(document.getElementById('numero1').value);
    var y = parseInt(document.getElementById('numero2').value);
    var z = parseInt(document.getElementById('numero3').value);
    if (!isNaN(x) && !isNaN(y) && !isNaN(z)) // Verifica si es un número
    {
        if(x == y || y == z || x == z)
            alert("Hay valores iguales");
        if(x > y && x > z)
        {
            if(y > z)
                document.getElementById('resultado').innerHTML ='El número mayor es: '+x+'.<br>El número del medio es: '+y+'.<br>El número menor es: '+z+'.';
            else
                document.getElementById('resultado').innerHTML ='El número mayor es: '+x+'.<br>El número del medio es: '+z+'.<br>El número menor es: '+y+'.';
        }
        if(y > x && y > z)
        {
            if(x > z)
                document.getElementById('resultado').innerHTML ='El número mayor es: '+y+'.<br>El número del medio es: '+x+'.<br>El número menor es: '+z+'.';
            else
                document.getElementById('resultado').innerHTML ='El número mayor es: '+y+'.<br>El número del medio es: '+z+'.<br>El número menor es: '+x+'.';
        }
        if(z > x && z > y)
        {
            if(x > y)
                document.getElementById('resultado').innerHTML ='El número mayor es: '+z+'.<br>El número del medio es: '+x+'.<br>El número menor es: '+y+'.';
            else
                document.getElementById('resultado').innerHTML ='El número mayor es: '+z+'.<br>El número del medio es: '+y+'.<br>El número menor es: '+x+'.';
        }
    }else
        alert("Verifique los valores ingresados");
}

function punto4()
{
    var x = parseInt(document.getElementById('numero1').value);
    var y = parseInt(document.getElementById('numero2').value);
    if (!isNaN(x) && !isNaN(y)) // Verifica si es un número
    {
        if(x % y == 0)
            document.getElementById('resultado').innerHTML ='El número '+x+' es múltiplo de '+y+'.';
        else
            document.getElementById('resultado').innerHTML ='El número '+x+' es no múltiplo de '+y+'.';
    }else
        alert("Verifique los valores ingresados");
}

function punto5()
{
    var x = parseInt(document.getElementById('numero').value);
    if (!isNaN(x)) // Verifica si es un número
    {
        if(x % 4 == 0 && !(x % 100 == 0))      { document.getElementById('resultado').innerHTML ='El año '+x+' es bisisesto.'; }
        else if (x % 100 == 0 && x % 400 == 0) { document.getElementById('resultado').innerHTML ='El año '+x+' es bisisesto.'; }  
        else                                   { document.getElementById('resultado').innerHTML ='El año '+x+' no es bisisesto.'; }
    }else
        alert("Verifique los valores ingresados");
}

function punto6()
{
    var nombre = document.getElementById('nombre').value;
    var horasTrabajadas = parseInt(document.getElementById('horasTrabajadas').value);
    var valorHora = parseInt(document.getElementById('valorHora').value);
    var salarioMinimo = parseInt(document.getElementById('salarioMinimo').value);
    document.getElementById('resultado').innerHTML ='Nombre: '+nombre+'.';
    if(!isNaN(horasTrabajadas) && !isNaN(valorHora) && !isNaN(salarioMinimo))
    {
        if(salarioMinimo < valorHora* horasTrabajadas)
            document.getElementById('resultado').innerHTML +='<br>Salario mensual: '+valorHora* horasTrabajadas+'.';
    }else
        alert("Verifique los valores ingresados");
}

function punto7()
{
    var x = parseInt(document.getElementById('numero').value);
    var valorEscritorio = 650000;
    if (!isNaN(x)) // Verifica si es un número
    {
        if(x < 5)
            {document.getElementById('resultado').innerHTML ='El valor a pagar es : '+(valorEscritorio* x)* .9+'.';}
        else if( x < 10)
            {document.getElementById('resultado').innerHTML ='El valor a pagar es : '+(valorEscritorio* x)* .8+'.';}
        else 
            {document.getElementById('resultado').innerHTML ='El valor a pagar es : '+(valorEscritorio* x)* .6+'.';}
    }else
        alert("Verifique los valores ingresados");
}

function punto8()
{
    var creditos = parseInt(document.getElementById('creditos').value);
    var valorCreditos = parseInt(document.getElementById('valorCreditos').value);
    var estrato = parseInt(document.getElementById('estrato').value);    
    if (!isNaN(creditos) && !isNaN(valorCreditos) && !isNaN(estrato)) // Verifica si es un número
    {
        var descuento = 1;
        switch (estrato)
        {
            case 1: descuento = .2; break;
            case 2: descuento = .5; break;
            case 3: descuento = .7; break;
        }
        if(creditos < 20)
            document.getElementById('resultado').innerHTML ='Costo de la matrícula : '+(creditos* valorCreditos*descuento)+'.';
        else
            document.getElementById('resultado').innerHTML ='Costo de la matrícula : '+ ((20* valorCreditos + valorCreditos* (creditos-20)*2))*descuento +'.';
        if (estrato == 1)
            document.getElementById('resultado').innerHTML +='<br>Valor subsidio : 200000.';
        if (estrato == 2)
            document.getElementById('resultado').innerHTML +='<br>Valor subsidio : 100000.';

    }else
        alert("Verifique los valores ingresados");
}

function punto9()
{
    var pesoMercancia = parseInt(document.getElementById('pesoMercancia').value);
    var valorMercancia = parseInt(document.getElementById('valorMercancia').value);
    var lunes = document.getElementById('dia').value;
    var tipoPago = document.getElementById('tipoPago').value;     
    if (!isNaN(pesoMercancia) && !isNaN(valorMercancia)) // Verifica si es un número
    {
        var tarifa = parseInt(tarifaEnvio(pesoMercancia));
        if(lunes == 'si' && tipoPago == 'tarjeta') {
            document.getElementById('resultado').innerHTML ='Tarifa : '+tarifa+'.<br>Promoción: '+(tarifa* .5)+'<br> Total a pagar: '+(tarifa* .5)+'.';
            return;
        }
        else if (tipoPago == 'efectivo' && valorMercancia > 1000000) {
            document.getElementById('resultado').innerHTML ='Tarifa : '+tarifa+'.<br>Promoción: '+(tarifa* .6)+'<br> Total a pagar: '+(tarifa* .6)+'.';
            return;
        }
        else {
            var descuento = parseFloat(descuentoMercancia(valorMercancia));
            document.getElementById('resultado').innerHTML ='Tarifa : '+tarifa+'.<br>Descuento: '+(descuento* tarifa)+'<br> Total a pagar: '+(tarifa - (descuento* tarifa))+'.';
            return;
        }
    }else
        alert("Verifique los valores ingresados");
}

function tarifaEnvio (pesoMercancia)
{
    if(pesoMercancia < 100) { return 20000; }
    else if(pesoMercancia <= 150) { return 25000; }
    else if (pesoMercancia <= 200) { return 30000; }
    else { return ( 35000 + (parseInt( (pesoMercancia - 200)/10 )* 2000) ); }
}

function descuentoMercancia (valorMercancia)
{
    if(valorMercancia >= 300000 && valorMercancia <= 600000) { return .1; }
    else if(valorMercancia > 600000 && valorMercancia <= 1000000) { return .2; }
    else if (valorMercancia > 1000000) { return .3; }
}

function punto10()
{
    var CC = parseInt(document.getElementById('CC').value);
    var TP = document.getElementById('TP').value;
    var TC = document.getElementById('TC').value;
    var PC = parseInt(document.getElementById('PC').value);
    var PA = parseInt(document.getElementById('PA').value);
    var VOL = parseInt(document.getElementById('VOL').value);
    var MA = document.getElementById('MA').value;
    var CA = costoAlmacenamiento(TP, TC, PC, PA, VOL, CC);
    var PDP = porcentajeDepreciacion(PA);
    var CE = costoExhibicion(TP, TC, MA, CA);
    var VR_P = (CC+CA+CE)* PDP;
    var VR_V = (TP == 'noPerecedero') ? VR_P*.2 + VR_P : VR_P*.4 + VR_P;
    if (!isNaN(CC) && !isNaN(PC) && !isNaN(PA) && !isNaN(VOL)) // Verifica si es un número
    {
        document.getElementById('resultado').innerHTML ='Costo de almacenamiento : '+CA+'.<br>Porcentaje depreciación: '+PDP+'.<br>Costo de exhibición: '+CE+'.<br>Valor producto: '+VR_P+'.<br>Valor venta: '+VR_V+'.';
    }else
        alert("Verifique los valores ingresados");
}

function costoAlmacenamiento(tipoProducto, tipoConservacion, periodoConservacion, periodoAlmacenamiento, volumen, costoCompra)
{
    if (tipoProducto == 'perecedero')
    {
        if (tipoConservacion == 'frio' && periodoConservacion < 10) { return .05 * costoCompra }
        if (tipoConservacion == 'frio' && periodoConservacion >= 10) { return .1 * costoCompra }
        if (tipoConservacion == 'ambiente' && periodoAlmacenamiento < 20) { return .03 * costoCompra }
        if (tipoConservacion == 'ambiente' && periodoAlmacenamiento > 20) { return .1 * costoCompra }
        if (tipoConservacion == 'ambiente' && periodoAlmacenamiento == 20) { return .05 * costoCompra }
    }
    else
    {
        if (tipoConservacion == 'ambiente' && volumen >= 50) { return .1 * costoCompra }
        else if (tipoConservacion == 'ambiente') { return .2 * costoCompra }
    }
    return parseInt(0);
}

function porcentajeDepreciacion (periodoAlmacenamiento) {return (periodoAlmacenamiento < 30) ?  parseFloat(.95) :parseFloat(.85) ;}

function costoExhibicion(tipoProducto, tipoConservacion, medioAlmacenamiento, costoAlmacenamiento)
{
    if (tipoProducto == 'perecedero')
    {
        if (tipoConservacion == 'frio' && medioAlmacenamiento == "nevera") { return 2 * costoAlmacenamiento }
        else if (tipoConservacion == 'frio' && medioAlmacenamiento == "congelador") { return costoAlmacenamiento }
    }
    else
    {
        if (medioAlmacenamiento == "estanteria") { return .05 * costoAlmacenamiento }
        else if (medioAlmacenamiento == "guacal") { return .07 * costoAlmacenamiento }
    }
    return parseInt(0);
}

function punto11()
{
    var ruta = parseInt(document.getElementById('ruta').value);
    var numeroViajes = parseInt(document.getElementById('numeroViajes').value);
    var numeroPasajeros = parseInt(document.getElementById('numeroPasajeros').value);
    var encomiendasMenos = parseInt(document.getElementById('encomiendasMenos').value);
    var encomiendasMitad = parseInt(document.getElementById('encomiendasMitad').value);
    var encomiendasMayor = parseInt(document.getElementById('encomiendasMayor').value);
    var ingresosP = ingresosPasajeros(ruta, numeroPasajeros, numeroViajes);
    var ingresosE = ingresosEncomiendas(ruta, encomiendasMenos, encomiendasMitad, encomiendasMayor);
    var ingresosConductor = ingresosE + ingresosP;
    var pagoA = parseInt(pagoAyudante(ingresosConductor)[0]);
    var pagoS = parseInt(pagoAyudante(ingresosConductor)[1]);
    var pagoC = 0;
    var totalDeducciones = pagoA+pagoS+pagoC;

    if (!isNaN(numeroViajes) && !isNaN(numeroPasajeros) && !isNaN(encomiendasMenos) && !isNaN(encomiendasMitad) && !isNaN(encomiendasMayor)) // Verifica si es un número
    {
        document.getElementById('resultado').innerHTML ='Ingresos por pasajero: '+ingresosP+'.<br>Ingresos por encomiendas: '+ingresosE+'.<br><br>TOTAL INGRESOS: '+ingresosConductor+
            '.<br><br>Pago ayudante: '+pagoA+'.<br>Pago seguro: '+pagoS+'.<br>Pago combustible: '+pagoC+'.<br><br>TOTAL INGRESOS: '+totalDeducciones+
            '.<br><br>TOTAL A LIQUIDAR: '+(ingresosConductor-totalDeducciones)+'.';
    }else
        alert("Verifique los valores ingresados");
}

function ingresosPasajeros(ruta, numeroPasajeros, numeroViajes)
{
    switch(ruta)
    {
        case 1: 
            if (numeroPasajeros < 50) { return parseInt(numeroViajes * 500000) }
            else if (numeroPasajeros < 100) { return parseInt(numeroViajes * 500000 + numeroViajes * 500000*.05) }
            else if (numeroPasajeros < 150) { return parseInt(numeroViajes * 500000 + numeroViajes * 500000*.06) }
            else if (numeroPasajeros < 200) { return parseInt(numeroViajes * 500000 + numeroViajes * 500000*.07) }
            else { return parseInt( (numeroViajes * 500000 + numeroViajes * 500000*.07) +  (numeroPasajeros - 200)* 50) }
        break;
        case 2: 
            if (numeroPasajeros < 50) { return parseInt(numeroViajes * 600000) }
            else if (numeroPasajeros < 100) { return parseInt(numeroViajes * 600000 + numeroViajes * 600000*.07) }
            else if (numeroPasajeros < 150) { return parseInt(numeroViajes * 600000 + numeroViajes * 600000*.08) }
            else if (numeroPasajeros < 200) { return parseInt(numeroViajes * 600000 + numeroViajes * 600000*.09) }
            else { return parseInt( (numeroViajes * 600000 + numeroViajes * 600000*.09) +  (numeroPasajeros - 200)* 60) }
        break;
        case 3: 
            if (numeroPasajeros < 50) { return parseInt(numeroViajes * 800000) }
            else if (numeroPasajeros < 100) { return parseInt(numeroViajes * 800000 + numeroViajes * 800000*.1) }
            else if (numeroPasajeros < 150) { return parseInt(numeroViajes * 800000 + numeroViajes * 800000*.13) }
            else if (numeroPasajeros < 200) { return parseInt(numeroViajes * 800000 + numeroViajes * 800000*.15) }
            else { return parseInt( (numeroViajes * 800000 + numeroViajes * 800000*.15) +  (numeroPasajeros - 200)* 100) }
        break;
        case 4: 
            if (numeroPasajeros < 50) { return parseInt(numeroViajes * 1000000) }
            else if (numeroPasajeros < 100) { return parseInt(numeroViajes * 1000000 + numeroViajes * 1000000*.125) }
            else if (numeroPasajeros < 150) { return parseInt(numeroViajes * 1000000 + numeroViajes * 1000000*.15) }
            else if (numeroPasajeros < 200) { return parseInt(numeroViajes * 1000000 + numeroViajes * 1000000*.17) }
            else { return parseInt( (numeroViajes * 1000000 + numeroViajes * 1000000*.17) +  (numeroPasajeros - 200)* 150) }
        break;
    }
}

function ingresosEncomiendas(ruta, encomiendasMenos, encomiendasMitad, encomiendasMayor)
{
    var total = parseInt(0);
    if (ruta == 1 || ruta == 2)
    {
        if (encomiendasMenos < 50) { total += 100* encomiendasMenos }
        else if (encomiendasMenos >= 50 && encomiendasMenos <= 100) { total += 120* encomiendasMenos }
        else if (encomiendasMenos > 100 && encomiendasMenos <= 130) { total += 150* encomiendasMenos }
        else { total += 160* encomiendasMenos }

        if (encomiendasMitad < 50) { total += 120* encomiendasMitad }
        else if (encomiendasMitad >= 50 && encomiendasMitad <= 100) { total += 140* encomiendasMitad }
        else if (encomiendasMitad > 100 && encomiendasMitad <= 130) { total += 160* encomiendasMitad }
        else { total += 180* encomiendasMitad }

        if (encomiendasMayor < 50) { total += 120* encomiendasMayor }
        else if (encomiendasMayor >= 50 && encomiendasMayor <= 100) { total += 140* encomiendasMayor }
        else if (encomiendasMayor > 100 && encomiendasMayor <= 130) { total += 160* encomiendasMayor }
        else { total += 180* encomiendasMayor }
    }
    if (ruta == 3 || ruta == 4)
    {
        if (encomiendasMenos < 50) { total += 130* encomiendasMenos }
        else if (encomiendasMenos >= 50 && encomiendasMenos <= 100) { total += 160* encomiendasMenos }
        else if (encomiendasMenos > 100 && encomiendasMenos <= 130) { total += 175* encomiendasMenos }
        else { total += 200* encomiendasMenos }

        if (encomiendasMitad < 50) { total += 140* encomiendasMitad }
        else if (encomiendasMitad >= 50 && encomiendasMitad <= 100) { total += 180* encomiendasMitad }
        else if (encomiendasMitad > 100 && encomiendasMitad <= 130) { total += 200* encomiendasMitad }
        else { total += 250* encomiendasMitad }

        if (encomiendasMayor < 50) { total += 170* encomiendasMayor }
        else if (encomiendasMayor >= 50 && encomiendasMayor <= 100) { total += 210* encomiendasMayor }
        else if (encomiendasMayor > 100 && encomiendasMayor <= 130) { total += 250* encomiendasMayor }
        else { total += 300* encomiendasMayor }
    }
    return total;
}

function pagoAyudante(ingresosConductor)
{
    let pago = []; // [Pago ayudante] [Pago seguro]
    if (ingresosConductor < 1000000) { pago.push(.05*ingresosConductor); pago.push(.03*ingresosConductor); }
    else if (ingresosConductor >= 1000000 && ingresosConductor <= 2000000) { pago.push(.08*ingresosConductor); pago.push(.04*ingresosConductor); }
    else if (ingresosConductor > 2000000 && ingresosConductor <= 4000000) { pago.push(.1*ingresosConductor); pago.push(.06*ingresosConductor); }
    else { pago.push(.13*ingresosConductor); pago.push(.09*ingresosConductor); }
    return pago;
}

function punto12()
{
    var n = parseInt(document.getElementById('n').value);

    if (!isNaN(n)) // Verifica si es un número
    {
        var sum = 0;
        for(var i = 1; i <= n; i++)
        {
            if (i % 15 == 0) {document.getElementById('resultado').innerHTML +='<br>';}
            document.getElementById('resultado').innerHTML +=" "+i;
            sum += i;
        }
        document.getElementById('resultado').innerHTML +="<br><br>La sumatoria es: "+sum+"<br>El promedio es: "+(sum/n);
    }else
        alert("Verifique los valores ingresados");
}

function punto13()
{
    var n = parseInt(document.getElementById('n').value);

    if (!isNaN(n)) // Verifica si es un número
    {
        document.getElementById('resultado').innerHTML ="El factorial es: "+factorial(n);
    }else
        alert("Verifique los valores ingresados");
}

function factorial(n) 
{ 
    var sum = 1;
    for(var i = n; i > 0; i--) { sum *= i; } 
    return sum;
}

function punto14()
{
    var n = parseInt(document.getElementById('n').value);
    var x = parseInt(document.getElementById('x').value);

    if (!isNaN(n)) // Verifica si es un número
    {
        var taylor = 1;
        for(var i = 1; i <= n; i++) 
        { 
            taylor += ( Math.pow(x, i)/ factorial(i)); 
        }
        document.getElementById('resultado').innerHTML ="f(x): "+taylor;
    }else
        alert("Verifique los valores ingresados");
}

function punto15()
{
    var n = parseInt(document.getElementById('n').value);
    var x = parseInt(document.getElementById('x').value);

    if (!isNaN(n)) // Verifica si es un número
    {
        var taylor = 1;
        for(var i = 1; i <= n; i++) 
        { 
            if (i % 2 != 0)
                taylor -= ( Math.pow(x, i)/ factorial(i)); 
            else 
                taylor += ( Math.pow(x, i)/ factorial(i)); 
        }
        document.getElementById('resultado').innerHTML ="f(x): "+taylor;
    }else
        alert("Verifique los valores ingresados");
}

function punto16()
{
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) // Verifica si es un número
    {
        var x = parseFloat( ( (b*-1) + Math.sqrt( Math.pow(b, 2)- 4*a*c ) ) / (2*a) );
        var y = parseFloat( (-1*b - Math.sqrt( Math.pow(b, 2)- 4*a*c ))/(2*a) );
        document.getElementById('resultado').innerHTML ="x1: "+x+"<br>x2: "+y;
    }else
        alert("Verifique los valores ingresados");
}

function punto17()
{
    var n = parseInt(document.getElementById('n').value);
    if (!isNaN(n)) // Verifica si es un número
    {
        let sum = [0, 1];
        var total = 1;
        document.getElementById('resultado').innerHTML =sum[0] +" "+ sum[1];
        for (var i = 0; i < n-1; i++)
        {
            var temp = sum[1];
            sum[1] = sum[0] + sum[1];
            sum[0] = temp;
            total += sum[1];
            document.getElementById('resultado').innerHTML +=" "+sum[1];
        }
        document.getElementById('resultado').innerHTML +="<br><br>Total :"+total;
    }else
        alert("Verifique los valores ingresados");
}

function punto18()
{
    var n = parseInt(document.getElementById('n').value);
    if (!isNaN(n)) // Verifica si es un número
    {
        let sum = [0, 1, 2];
        var total = 0;
        document.getElementById('resultado').innerHTML ="0 1 2";
        for (var i = 0; i < n-3; i++)
        {
            var operacion = sum[0] + sum[1] + sum[2];
            sum[0] = sum[1];
            sum[1] = sum[2];
            sum[2] = operacion;
            total += operacion;
            document.getElementById('resultado').innerHTML +=" "+operacion;
        }
        document.getElementById('resultado').innerHTML +="<br><br>Total :"+(total+3);
    }else
        alert("Verifique los valores ingresados");
}

function punto19()
{
    var n = parseInt(document.getElementById('n').value);
    if (!isNaN(n)) // Verifica si es un número
    {        
        if (esPrimo(n) == 2)
            document.getElementById('resultado').innerHTML ="<br>El número: "+n+", es primo.";
        else
            document.getElementById('resultado').innerHTML ="<br>El número: "+n+", no es primo.";
    }else
        alert("Verifique los valores ingresados");
}

function esPrimo(n)
{
    var temp = 0;
    if(n == 1) { return 2 }
    for(var i = 1; i <= n; i++)
    {
        temp += (n % i == 0) ? 1 : 0;
    }
    return temp;
}

function punto20()
{
    var n = parseInt(document.getElementById('n').value);
    if (!isNaN(n)) // Verifica si es un número
    {
        var temp = n;
        var total = 0;
        var i = 1;
        while(n != 0)
        {
            if(esPrimo(i) == 2)
            {
                total += i;
                n --;
                document.getElementById('resultado').innerHTML +=" "+i;
            }
            i ++;
        }
        console.log(parseInt(temp/n), temp, n);
        document.getElementById('resultado').innerHTML +="<br><br>Total: "+total+"<br><br>Promedio: "+total/temp;
    }else
        alert("Verifique los valores ingresados");
}

function punto21()
{
    var n = parseInt(document.getElementById('n').value);

    if (!isNaN(n)) // Verifica si es un número
    {
        var euler = 0;
        for(var i = 0; i < n; i++) 
        { 
            euler +=  1/ factorial(i); 
        }
        document.getElementById('resultado').innerHTML ="e: "+euler;
    }else
        alert("Verifique los valores ingresados");
}

function punto22()
{
    var n = parseInt(document.getElementById('n').value);

    if (!isNaN(n)) // Verifica si es un número
    {
        var pi = 0;
        var denominador = 1;
        for(var i = 1; i <= n; i++) 
        { 
            if (i % 2 == 0)
                pi -=  1/ denominador ;
            else
                pi +=  1/ denominador ; 
            denominador += 2;
        }
        document.getElementById('resultado').innerHTML ="pi: "+pi* 4;
    }else
        alert("Verifique los valores ingresados");
}