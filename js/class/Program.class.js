import Pen from "../class/Pen.class.js";
import ColorPalette from "../class/ColorPalette.class.js";
import Slate from "../class/Slate.class.js";


export default class Program {
    constructor() {

        this.newPen = new Pen();
        this.newSlate = new Slate(this.newPen);
        this.newColorPalette = new ColorPalette();
        this.lunchApp();
    };

    onClickPenColor(e) {
        this.newPen.color = e.path[0].attributes[1].textContent;
    };
    onClickPenSize(e) {
        this.newPen.size = e.path[0].attributes[1].textContent;
    };

    lunchApp() {

        this.newSlate.canvas.addEventListener('mousedown', (e) => {
            this.newSlate.position.x = e.offsetX;
            this.newSlate.position.y = e.offsetY;
            this.newSlate.isDrawing = true;
        });

        this.newSlate.canvas.addEventListener('mousemove', (e) => {
            if (this.newSlate.isDrawing === true) {
                this.newSlate.draw(e.offsetX, e.offsetY);
                this.newSlate.position.x = e.offsetX;
                this.newSlate.position.y = e.offsetY;
            };
        });

        document.querySelectorAll('.pen-color').forEach((e) => {
            e.addEventListener('click', (e) => {
                this.onClickPenColor(e);
            });
        });

        document.querySelectorAll('.pen-size').forEach((e) => {
            e.addEventListener('click', (e) => {
                this.onClickPenSize(e);
            });
        });

        tool_clear_canvas.addEventListener('click', () => {
            this.newSlate.clear();
        });

        tool_color_picker.addEventListener('click', () => {
            this.newColorPalette.buildGradiant();
        });

        body.addEventListener('mouseup', (e) => {
            if (this.newSlate.isDrawing === true) {
                this.newSlate.draw(e.offsetX, e.offsetY);
                this.newSlate.position.x = 0;
                this.newSlate.position.y = 0;
                this.newSlate.isDrawing = false;
            };
        });

        palette.addEventListener('click', (e) => {
            this.newPen.color = this.newColorPalette.onClickPalet(e);
        });
    };
};

