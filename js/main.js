import Program from "./class/Program.class.js";
import Slate from "./class/Slate.class.js";
import ColorPalette from "./class/ColorPalette.class.js";
import Pen from "./class/Pen.class.js";

document.addEventListener('DOMContentLoaded', () => {
    const newApp = new Program();

    document.addEventListener('click', (e) => {
        newApp.onClickPenColor(e);
    });

    canvas.addEventListener('mousedown', (e) => {
       newApp.zoneDraw.position.x = e.offsetX;
        newApp.zoneDraw.position.y = e.offsetY;
        newApp.zoneDraw.isDrawing = true; 
    });

    canvas.addEventListener('mousemove', (e) => {
        if (newApp.zoneDraw.isDrawing === true) {
            newApp.zoneDraw.drawLine(newApp.zoneDraw.context, newApp.zoneDraw.position.x, newApp.zoneDraw.position.y, e.offsetX, e.offsetY, newApp.onClickPenColor(e), newApp.myPen.size);
            newApp.zoneDraw.position.x = e.offsetX;
            newApp.zoneDraw.position.y = e.offsetY;
        };
    });

    body.addEventListener('mouseup', e => {
        if (newApp.zoneDraw.isDrawing === true) {
            newApp.zoneDraw.drawLine(newApp.zoneDraw.context, newApp.zoneDraw.position.x, newApp.zoneDraw.position.y, e.offsetX, e.offsetY, newApp.onClickPenColor(e), newApp.myPen.size);
            newApp.zoneDraw.position.x = 0;
            newApp.zoneDraw.position.y = 0;
            newApp.zoneDraw.isDrawing = false;
        }
    });

});


// installer un gestionnaire d'event dans lequel
// - il y aura l'instance de la class Program
// - et la méthode d'éxecution de l'appli'