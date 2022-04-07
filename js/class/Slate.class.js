import Pen from "./Pen.class.js";

class Slate {

    constructor(pen) {
        this.pen = pen;
        this.canvas = canvas
        this.context = this.canvas.getContext("2d");
        this.isDrawing = false;
        this.position = {
            x: 0,
            y: 0
        };
    };
    
    draw(x2, y2) {
        this.context.beginPath();
        this.context.strokeStyle = this.pen.color;
        this.context.lineWidth = this.pen.size;
        this.context.moveTo(this.position.x, this.position.y);
        this.context.lineTo(x2, y2);
        this.context.stroke();
        this.context.closePath();
    };

    clear() {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    };
};

export default Slate;