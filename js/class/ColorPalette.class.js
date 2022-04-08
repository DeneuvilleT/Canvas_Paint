export default class ColorPalette {

    constructor() {

        this.palette = palette;
        this.context = this.palette.getContext("2d");
        this.rgb = {
            r: 0,
            g: 0,
            b: 0
        };
        this.dataImage = undefined;
    };

    buildGradiant() {
        palette.classList.toggle('hide');

        let gradiant = this.context.createLinearGradient(0, 0, 220, 0);

        gradiant.addColorStop(0, "white");
        gradiant.addColorStop("0.1", "black");
        gradiant.addColorStop("0.3", "magenta");
        gradiant.addColorStop("0.5", "blue");
        gradiant.addColorStop("0.6", "green");
        gradiant.addColorStop("0.8", "yellow");
        gradiant.addColorStop(1, "red");

        this.context.fillStyle = gradiant;
        this.context.fillRect(0, 0, 256, 256);
    };

    onClickPalet(e) {

        this.dataImage = this.context.getImageData(e.offsetX, e.offsetY, 1, 1);
        this.rgb.r = this.dataImage.data[0];
        this.rgb.g = this.dataImage.data[1];
        this.rgb.b = this.dataImage.data[2];

        return `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
    };

};

