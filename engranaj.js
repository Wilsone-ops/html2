window.onload = function () {

    ///let = Indica una variable a nivel de bloque {}

    let canvas = document.getElementById("theLostCanvas");
    if (canvas //Si el objeto existe.
        && //Si, el objeto existe.
        // and ambas partes deben ser verdaderas
        // or solamente una debe ser verdadera
        // not true
        canvas.getContext) {
        let ctx = canvas.getContext("2d"); //deinimos los ejes x,y
        if (ctx) {
            //entro del canvas
            let centroX = canvas.width / 2;
            let centroY = canvas.height / 2;

            // definimos el radio

            let radioExterno = 95; //Radio de las puas
            let radioInterno = 50; // Radio del circulo
            let radioMedio = radioInterno * 1.6;
            let radioCentro = 20;

            //Numeros de puntos del engranaje
            let numeroPuntos = 40;

            //Configuramos las lineas
            ctx.beginPath(); // nos indica el inicio de la linea
            ctx.lineJoin = "bevel";
            // al unir las lineas se utiliza una acabado redondo

            for (
                let i = 0; //Se llama i por convencion
                i < numeroPuntos;
                //condicion logica true o false
                i++
                // Al valor de i se le suma 1
                // variable =+ variable = variable + variable
                // i -- resta el valor en 1 
            ) {
                if (
                    i % 2 == 0
                    // i que es el marcapasos de for
                    // % el residuo de i divido en 2
                    // == igual
                    // != diferente
                ) {
                    // si no es par
                    radio = radioExterno;
                } else {
                    //Si no es par
                    radio = radioInterno;
                }

                let angulo = Math.PI * 2 / numeroPuntos * (i + 1);

                //calculamos las coordenadas externas.
                let x = (radio * Math.sin(angulo)) + centroX;
                let y = (radio * Math.cos(angulo)) + centroY;

                if( i ==0 ){
                    ctx.moveTo(x,y);
                }else{
                    ctx.lineTo(x,y); //Linea complementaria
                }
            }
               
            // configuracion de visual de las lineas
            ctx.closePath(); // Cerramos la figura en el punto indicado
            // por defecto es el inicio (moveTo())
            ctx.lineWidth = 5 ;// ancho de linea
            ctx.strokeStyle = "red" // define e; color externo de la linea.
            ctx.fillStyle = "yellow"; //Define el color de relleno de la forma
            ctx.stroke(); // pintamos la linea
        }
    }
    

}    