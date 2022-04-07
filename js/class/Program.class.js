import Pen from "../class/Pen.class.js";
import ColorPalette from "../class/ColorPalette.class.js";
import Slate from "../class/Slate.class.js";


class Program {
    constructor() {

        this.newPen = new Pen();
        this.newSlate = new Slate();
        this.newColorPalette = new ColorPalette();
    };

    onClickPenColor(e) {
        this.newPen.color = e.path[0].attributes[1].textContent;
    };
    onClickPenSize(e) {
        this.newPen.size = e.path[0].attributes[1].textContent;
    };
};

export default Program;



/*onPickColor() {
    // écouter sur la pipette pur display la palette de dégradé
    
};*/
/*start() {
    // installer des écouteurs sur les outils et de configuration
    // y'aura un gestionnaire d'evenement custom à créer (à ne pas faire tout de suite FFS !)
};*/
