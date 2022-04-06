import Pen from "../class/Pen.class.js";
import ColorPalette from "../class/ColorPalette.class.js";
import Slate from "../class/Slate.class.js";

class Program {

    constructor(){
        // instancier 3 propriétés :
        // - ColorPalette
        // - Pen
        // - Slate

        this.zoneDraw = new Slate();
        this.myPen = new Pen();
        this.colorSelector = new ColorPalette();
        
        


    }

    // écouter sur la pipette pur display la palette de dégradé
    
    // méthodes:

    onClickPenColor(e) {
        console.log(e.path[0].attributes[1].textContent)
        return e.path[0].attributes[1].textContent
    }

    onClickPenSize(){

    }

    onPickColor(){
        
    }

    start(){
        // installer des écouteurs sur les outils et de configuration




        // y'aura un gestionnaire d'evenement custom à créer (à ne pas faire tout de suite FFS !)

    }


};

export default Program;

// Un booléen qui, lorsqu'il est vrai, indique que le déplacement de
// la souris entraîne un dessin sur le canevas
//let isDrawing = false;
//let x = 0;
//let y = 0;

//const myPics = document.getElementById('myPics');
//const context = myPics.getContext('2d');

// On récupère le décalage du canevas en x et y par rapport aux bords
// de la page
//const rect = myPics.getBoundingClientRect();

// On ajoute les gestionnaires d'évènements pour mousedown, mousemove
// et mouseup
/*myPics.addEventListener('mousedown', e => {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
});*/

/*myPics.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
});*/

/*window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});*/

/*function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}   */