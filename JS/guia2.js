window.onload = function () {
    let canvas =
        document.getElementById("theLostCanvas");
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d");
        if (ctx) {
            //ancho de linea
            ctx.lineWidth = 15;
            ctx.strokeStyle = "yellow"; //Borde amarillo

            //Trazado
            ctx.beginPath(); //Inicia la linea
            ctx.lineCap= "round"; // Punta de la linea
            ctx.moveTo(50,50);// iniciado del punto
            ctx.lineTo(350,50); //Final del punto [Punto]
            ctx.stroke();

            //Segunda linea
            ctx.strokeStyle = "orange";
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.MoveTo(25,100);
            ctx.lineTo(350,100);
            ctx.stroke();

            
            //Tercera linea
            ctx.strokeStyle = "red";
            ctx.lineCap = "butt";
            ctx.beginPath();
            ctx.MoveTo(50, 150);
            ctx.lineTo(350, 150);
            ctx.stroke();
        
        } 
    } else {
        alert("no su navegador soporta canvas");
    }
}