class Slate {

    constructor() {
        
        this.context = canvas.getContext("2d");
        this.isDrawing = false;
        this.position = {
            x: 0,
            y: 0
        };
    };
    
    draw(x2, y2, color, size) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.lineWidth = size;
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


        // au début, on ne sait pas où se trouve la souris (currentLocation)
        // installer les écouteur lié à la souris
        // au début on dessine pas (isDrawing)
        // récupération du canvas, du context
        // stockage de l'objet crayon