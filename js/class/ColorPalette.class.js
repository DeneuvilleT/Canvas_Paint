import Program from "../class/Program.class.js";
import Pen from "../class/Pen.class.js";
import Slate from "../class/Slate.class.js";

class ColorPalette {

    constructor(canvas, context) {
        // récupérer le canvas/context
        this.context = context;
        this.canvas = canvas;
        // initialiser une proriété rgb (objet ??)
        this.rgb = {
            r: 0,
            g: 0,
            b: 0
        };
        // installer l'écouteur sur la ColorPalette
        

        // appeler la methode pour Build() la palette
        this.build()

    }

    // méthode de construction graphique de la palette de couleurs
    build() {




    }

    // getter pour récuperer la .pickedColor
    // ...


    // méthode de gestion de click sur la palette
    onClick() {



    }




}

export default ColorPalette