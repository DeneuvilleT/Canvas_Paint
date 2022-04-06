import Program from "../class/Program.class.js";
import Pen from "../class/Pen.class.js";
import ColorPalette from "../class/ColorPalette.class.js";

class Slate {
    // le constructor reçoit un argument
    constructor(positionX, positionY){

        // récupération du canvas, du context
        this.positionX = positionX;
        this.positionY = positionY;
        this.context = canvas.getContext("2d");
        this.isDrawing = false;
        this.position = {
            x: 0,
            y: 0
        };
        
        // au début, on ne sait pas où se trouve la souris (currentLocation)

        // au début on dessine pas (isDrawing)

        // stockage de l'objet crayon
        

        // installer les écouteur lié à la souris



    }

    drawLine(context, x1, y1, x2, y2, color, size) {
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = size;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }

    // méthode de nettoyage de l'ardoise
    clear(){


    }


    getMouseLocation(e){
        this.positionX = e.offsetX;
        this.positionY = e.offsetY;
        console.log(this.positionX, this.positionY)
    }


    // méthodes sur la gestion de la souris
    //...



};

export default Slate;