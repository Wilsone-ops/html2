window.onload = function () {
    let canvas =
        document.getElementById("theLostCanvas");
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d");
        if (ctx) {
            let gato = new Image();
            gato.src = "../img/gato.png"
            gato.onload = function(e){
            let patron = ctx.createPattern(gato, "repeat");
            ctx.fillStyle = patron;
            ctx.fillRect(0,0, canvas.width, canvas.height);
            }
            
        }
        
    } else {
        alert("no su navegador soporta canvas");
    }
}