import Program from "../class/Program.class.js";
import ColorPalette from "../class/ColorPalette.class.js";
import Slate from "../class/Slate.class.js";

class Pen {
    constructor(color, size) {

        this.color = color
        this.size = size;

        // initialiser 2 propriétés avec des valeurs par defaut
        // - color - size
    }

    configure() {
        // méthode de configuration de l'ardoise à l'execution d'un dessin avec le crayon
        // mise à jour des propriété de dessin de l'ardoise(slate)
    }

    // setter pour appliquer la couleur "au crayon", et un autre pour appliquer la taille( size)
    //...
    // methode pour appliquer une couleur rgb au crayon
};

export default Pen;