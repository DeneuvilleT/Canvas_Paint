import Pen from "../class/Pen.class.js";
import ColorPalette from "../class/ColorPalette.class.js";
import Slate from "../class/Slate.class.js";

class Program {

    constructor(){
        // instancier 3 propriétés :
        // - ColorPalette
        // - Pen
        // - Slate

        const zoneDraw = new Slate();
        const myPen = new Pen();
        const colorSelector = new ColorPalette();
        


    }

    // écouter sur la pipette pur display la palette de dégradé

    // méthodes:

    onClickPenColor(){

    }

    onClickPenSize(){

    }

    onPickColor(){

    }

    start(){
        // installer des écouteurs sur les outils et de configuration




        // y'aura un gestionnaire d'evenement custom à créer (à ne pas faire tout de suite FFS !)

    }


}

export default Program