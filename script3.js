class Button{
    constructor(width, height, text){
        this.width = width;
        this.height = height;
        this.text = text;
    }
    showBtn() {
        document.write(`<button style="width: ${this.width}; height: ${this.height};">${this.text}</button>`)
    }
}
class BootstrapButton{
    constructor(width, height, text, color){
        this.width = width;
        this.height = height;
        this.text = text;
        this.color = color;
    }
    showBtn() {
        document.write(`<button style="width: ${this.width}; height: ${this.height}; color: ${this.color};">${this.text}</button>`)
    }
}