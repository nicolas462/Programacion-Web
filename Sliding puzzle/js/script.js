class Puzzle{
    constructor(rows, columns)
    {
        this.imageSize = 360;
        this.rows = rows;
        this.columns = columns;
        this.blankTile = 0;
        this.chronometer = false;
        this.setPuzzle();
    }

    newGame()
    {
        document.getElementById('buttonChronometer').className = 'buttonChronometer';
        document.getElementById('btnNewGame').innerHTML = 'jugar de nuevo';
        this.shuffle();
        this.startChronometer();
    }

    /**
     * Cambia el valor de las filas y columnas.
     */
    reSetValues()
    {
        this.rows = parseInt(document.getElementById('reSetRows').value);
        this.columns = parseInt(document.getElementById('reSetColumns').value);
        document.getElementById('table').innerHTML = "";
        document.getElementById('buttonChronometer').innerHTML = '<span id="hours">00:</span><span id="minutes">00:</span><span id="seconds">00:</span><span id="miliseconds">000</span>';
        document.getElementById('btnNewGame').innerHTML = 'jugar de nuevo';
        this.setPuzzle();
        this.shuffle();
        this.startChronometer();
    }

    /**
     * Cambia la imagen del puzzle
     * @param {índice de la imagen} image 
     */
    changeImage(image)
    {
        document.documentElement.style.setProperty('--url', `url("../images/${image}.jpg")`);
        document.getElementById('table').innerHTML = "";
        this.stopChronometer();
        document.getElementById('buttonChronometer').innerHTML = '<span id="hours">00:</span><span id="minutes">00:</span><span id="seconds">00:</span><span id="miliseconds">000</span>';
        document.getElementById('buttonChronometer').className = 'buttonChronometer';
        document.getElementById('btnNewGame').innerHTML = 'empezar juego';
        this.setPuzzle();
    }

    /**
     * Genera el código HTML según las filas y columnas establecidas.
     */
    setPuzzle()
    {
        var count = 1; //Enumera cada pieza
        for (var i = 0; i < this.rows; i++)
        {
            document.getElementById('table').innerHTML += '<div id="row' + i + '" style="display: table-row;">';
            for(var j = 0; j < this.columns; j++)
            {//onClick="p.clickTile('+i+','+j+');
                document.getElementById(`row${i}`).innerHTML += '<div id="cell' + i+''+j + '" class="tile tile'+count+'"onClick="p.clickTile('+i+','+j+'); p.puzzleFinished();"></div>';
                count ++;
            }
            document.getElementById('table').innerHTML += '</div>';
        }
        //Establece la última pieza en blanco
        this.blankTile = count - 1;
        document.getElementsByClassName(`tile${this.blankTile}`)[0].style.background = 'rgba(0, 0, 0, 0.3)';
        this.setTilesSize();
    }
    /**
     * Para obtener el ancho de cada fila, se divide por la cantidad de columnas
     * y para el largo por la cantidad de filas.
     */
    setTilesSize()
    {
        var tiles = document.getElementsByClassName('tile');
        for (var i = 0; i < tiles.length; i++)
        {
            tiles[i].style.height = (this.imageSize/this.rows)+'px';
            tiles[i].style.width = (this.imageSize/this.columns)+'px';
        }
        this.setTilesBackground();
    }

    /**
     * Establece la posición en la que se va a visualizar la casilla.
     */
    setTilesBackground()
    {
        var cellWidth = this.imageSize/this.columns;
        var cellHeight = this.imageSize/this.rows;
        var count = 1;
        
        for (var i = 0; i < this.rows ; i++){
            for(var j = 0; j < this.columns; j++)
            {
                document.getElementsByClassName(`tile${count}`)[0].style.backgroundPosition = `${this.imageSize - cellWidth * j}px ${this.imageSize - cellHeight * i}px`;
                count++;
            }
        }
    }

    /**
     * Verifica en qué posición se encuentra la casilla blanca para realizar el intercambio.
     * @param {Posición X de la celda seleccionada} cellRow 
     * @param {Posición Y de la celda seleccionada} cellColumn 
     */
    clickTile(cellRow, cellColumn)
    {
        var blankTile =  `tile tile${this.blankTile}`; // Nombre de la clase de la casilla blanca
        var currentTile = `cell${cellRow}${cellColumn}`;  //Id casilla clickeada
        // Si la casilla seleccionada no es la blanca
        if (document.getElementById(currentTile).className != blankTile)
        {
            // Si la casilla blanca está abajo
            if (cellRow < this.rows-1)
            {
                if(document.getElementById(`cell${cellRow+1}${cellColumn}`).className == blankTile)
                {
                    this.swapTiles(currentTile, `cell${cellRow+1}${cellColumn}`);
                    return;
                }
            }
            // Si la casilla blanca está a la derecha
            if (cellColumn < this.columns-1)
            {
                if(document.getElementById(`cell${cellRow}${cellColumn+1}`).className == blankTile)
                {
                    this.swapTiles(currentTile, `cell${cellRow}${cellColumn+1}`);
                    return;
                }
            }
            // Si la casilla blanca está arriba
            if (cellRow > 0){
                if(document.getElementById(`cell${cellRow-1}${cellColumn}`).className == blankTile)
                {
                    this.swapTiles(currentTile, `cell${cellRow-1}${cellColumn}`);
                    return;
                }
            }
            // Si la casilla blanca está a la izquierda
            if (cellColumn > 0)
            {
                if(document.getElementById(`cell${cellRow}${cellColumn-1}`).className == blankTile)
                {
                    this.swapTiles(currentTile, `cell${cellRow}${cellColumn-1}`);
                    return;
                }
            }
        }
        return;
    }

    /**
     * Intercambia las posiciones. Si la casilla B no es la vacía realiza el intercambio 
     * de una manera distinta, pues sirve para reorganizar el Puzzle.
     * @param {Casilla 1} cellA 
     * @param {Cassila 2} cellB 
     */
    swapTiles(cellA, cellB)
    {
        var temp = document.getElementById(cellA).style.backgroundPosition;

        if (document.getElementById(cellB).style.background.includes('rgba(0, 0, 0, 0.3)')) 
        {
            // Deshace el color blanco de la celda vacía y lo intercambia a la destino
            document.getElementById(cellA).style.backgroundPosition = null;
            document.getElementById(cellA).style.background = 'rgba(0, 0, 0, 0.3)';
            document.getElementById(cellB).style.background = null;
            document.getElementById(cellB).style.backgroundPosition = temp;
        }
        else{
            document.getElementById(cellA).style.backgroundPosition = document.getElementById(cellB).style.backgroundPosition;
            document.getElementById(cellB).style.backgroundPosition = temp;
        }
        
        // Cambia los nombres de las clases
        var temp2 = document.getElementById(cellA).className;
        document.getElementById(cellA).className = document.getElementById(cellB).className;
        document.getElementById(cellB).className = temp2;  
    }

    /**
     * Mezcla las casillas aleatoriamente
     */
    shuffle()
    {
        for(var i = 0; i < this.rows; i++)
            for(var j = 0; j < this.columns; j++)
            {
                var aux1 = Math.floor(Math.random()* this.rows);
                var aux2 = Math.floor(Math.random()* this.columns);

                if(!(document.getElementById(`cell${i}${j}`).style.background.includes('rgba(0, 0, 0, 0.3)')))
                    this.swapTiles(`cell${i}${j}`, `cell${aux1}${aux2}`);
            }
    }

    /**
     * Revisa si el rompecabezas está completo, si lo está, retorna el producto de filas por columnas.
     */
    check()
    {
        var tileIndex = 1;
        for(var i = 0; i < this.rows; i++)
        {
            for(var j = 0; j < this.columns; j++)
            {
                // si la casilla tileIndex está en la celda correspondiente
                if( document.getElementById(`cell${i}${j}`).className.includes(`tile${tileIndex}`) )
                    tileIndex ++;
                else
                    return tileIndex;
            }
        }
        return tileIndex -1;
    }

    /**
     * Detiene el cronómetro si el puzzle está finalizado.
     */
    puzzleFinished()
    { 
        var tileQuantity = this.rows* this.columns;
        if (this.check() == tileQuantity) 
        {
            document.getElementById('buttonChronometer').className = 'wonChronometer';
            this.stopChronometer();
        }
    }

    /**
     * Lógica detrás del cronómetro
     */
    startChronometer()
    {
        var ms = 0;
        var s = 0;
        var m = 0;
        var h = 0;
        var temp = 0;
        var pms = document.getElementById('miliseconds');
        var ps = document.getElementById('seconds');
        var pm = document.getElementById('minutes');
        var ph = document.getElementById('hours');

        if(this.chronometer != false)
        {
            this.stopChronometer();
            pms.innerHTML = '000';
            ps.innerHTML = '00:';
            pm.innerHTML = '00:';
            ph.innerHTML = '00:';
        }

        this.chronometer = setInterval(function(){
            if(ms == 100)
            {
                temp = 0;
                ms = 0;
                s++;
                ps.innerHTML = s+':';
                if (s < 10) { ps.innerHTML = '0' + s +':'}

                if(s == 60)
                {
                s = 0;
                m++;
                pm.innerHTML = m+':';
                if (m < 10) { pm.innerHTML = '0' + m+':'}

                    if(m == 60)
                    {
                    m = 0;
                    h++;
                    ph.innerHTML = h+':';
                    if (h < 10) { ph.innerHTML = '0' + h+':' }
                    }
                }    
            }
            ms++;
            pms.innerHTML = ms;
            if (ms < 10) { pms.innerHTML = '00' + ms }
            else if (ms < 100) { pms.innerHTML = '0' + ms }
        }, 10); // Fin función()
    }

    stopChronometer() { clearInterval(this.chronometer); }
}
p = new Puzzle(3,3);
