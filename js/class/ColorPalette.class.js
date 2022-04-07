import Program from "../class/Program.class.js";
import Pen from "../class/Pen.class.js";
import Slate from "../class/Slate.class.js";

class ColorPalette {

    constructor(canvas, context) {
        this.context = context;
        this.canvas = canvas;
        this.buildGradiant();
        this.rgb = {
            r: 0,
            g: 0,
            b: 0
        };

        // récupérer le canvas/context
        // initialiser une proriété rgb (objet ??)
        // installer l'écouteur sur la ColorPalette
        // appeler la methode pour Build() la palette
    }

    buildGradiant() {
        // méthode de construction graphique de la palette de couleurs
    }

    onClick() {
        // getter pour récuperer la .pickedColor
        // ...
        // méthode de gestion de click sur la palette
    }
};

export default ColorPalette;