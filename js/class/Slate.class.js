export default class Slate {

    constructor(newPen) {
        
        this.newPen = newPen;
        this.canvas = canvas
        this.context = this.canvas.getContext("2d");
        this.isDrawing = false;
        this.position = {
            x: 0,
            y: 0
        };
    };
    
    draw(x, y) {
        this.context.beginPath();
        this.context.strokeStyle = this.newPen.color;
        this.context.lineWidth = this.newPen.size;
        this.context.moveTo(this.position.x, this.position.y);
        this.context.lineTo(x, y);
        this.context.stroke();
        this.context.closePath();
    };

    clear() {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    };
};

