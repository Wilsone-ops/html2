window.onload = function () {
    let canvas =
        document.getElementById("theLostCanvas");
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d");
        if (ctx) {

            //Colores
            ctx.strokeStyle = "#ff0000";//pinta la parte de negro.
            ctx.fillStyle = "yellow"; // colorea la parte interna.
            ctx.lineWidth = 5; // Grosor de la linea.
            //x,y,w,h
            ctx.fillRect(50, 50, 100, 100);//Crea una linea.
            ctx.strokeRect(50, 50, 100, 100);// Sombra del cuadro.
            
            ctx.fillStyle= "rgb(0,42,255)"; 
            ctx.fillRect(200, 50, 100, 100);//Crea una linea.
            ctx.strokeRect(200, 50, 100, 100);// Sombra del cuadro.

        }
        alert("Su navegador soporta canvas");
    } else {
        alert("no su navegador soporta canvas");
    }
}