export default class Canvas2D {

    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     * @param {integer} width 
     * @param {integer} height 
     */
    constructor(canvas){

        this.canvas = canvas || new HTMLCanvasElement();
    };

    /**
     * 
     * @param {integer} width 
     */
    setWidth(width){
        this.canvas.width = width;
    };

    /**
     * 
     * @param {integer} height 
     */
    setHeight(height){
        this.canvas.height = height;
    };

    getDim(dimension){

        switch(dimension){
            case 1:return this.canvas.width;
            case 2:return this.canvas.height;
        }
    }

    /**
     * 
     * @returns
     */
    getContext(){
        return this.canvas.getContext("2d");
    };

    /**
     * 
     * @param {CanvasImageSource} image 
     * @param {number} dx 
     * @param {number} dy 
     * @returns {CanvasRenderingContext2D} CanvasRenderingContext2D
     */
    draw(image,dx,dy){

        this.getContext().drawImage(image,dx,dy);
        return this.getContext();
    };

    /**
     * 
     * @returns {CanvasRenderingContext2D} CanvasRenderingContext2D 
     */
    clear(){
        this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height);
        return this.getContext();
    }

    /**
     * 
     * @param {ImageData} imageData 
     * @returns {CanvasRenderingContext2D} CanvasRenderingContext2D  
     */
    putImageData(imageData){
        this.getContext().putImageData(imageData,0,0);
        return this.getContext();
    };

    /**
     * 
     * @returns {ImageData} ImageData
     */
    getImageData(){
        return this.getContext().getImageData(0,0,this.canvas.width,this.canvas.height);
    };
}