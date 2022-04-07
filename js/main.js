import Program from "./class/Program.class.js";

document.addEventListener('DOMContentLoaded', () => {
    const newApp = new Program();

    document.querySelectorAll('.pen-color').forEach((e) => {
        e.addEventListener('click', (e) => {
            newApp.onClickPenColor(e);
        });
    });
    document.querySelectorAll('.pen-size').forEach((e) => {
        e.addEventListener('click', (e) => {
            newApp.onClickPenSize(e);
        });
    });

    tool_clear_canvas.addEventListener('click', () => {
        newApp.newSlate.clear();
    });

    tool_color_picker.addEventListener('click', () => {
        newApp.onPickColor();
    });

    canvas.addEventListener('mousedown', (e) => {
        newApp.newSlate.position.x = e.offsetX;
        newApp.newSlate.position.y = e.offsetY;
        newApp.newSlate.isDrawing = true;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (newApp.newSlate.isDrawing === true) {
            newApp.newSlate.draw(e.offsetX, e.offsetY, newApp.newPen.color, newApp.newPen.size);
            newApp.newSlate.position.x = e.offsetX;
            newApp.newSlate.position.y = e.offsetY;
        };
    });

    body.addEventListener('mouseup', (e) => {
        if (newApp.newSlate.isDrawing === true) {
            newApp.newSlate.draw(e.offsetX, e.offsetY, newApp.newPen.color, newApp.newPen.size);
            newApp.newSlate.position.x = 0;
            newApp.newSlate.position.y = 0;
            newApp.newSlate.isDrawing = false;
        };
    });

});


// installer un gestionnaire d'event dans lequel
// - il y aura l'instance de la class Program
// - et la méthode d'éxecution de l'appli'