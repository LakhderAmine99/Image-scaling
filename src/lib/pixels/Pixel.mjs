export default class Pixel{

    static imageData = null;

    /**
     * 
     * @param {ImageData} data 
     */
    static loadData(imagedata){
        Pixel.imageData = imagedata;
    };

    static getData(){
        return Pixel.imageData;
    };

    static getPixel(x,y){
        x = Math.floor(x);
        y = Math.floor(y);

        return{
            r:Pixel.imageData.data[x*Pixel.imageData.width*4 + y*4],
            g:Pixel.imageData.data[x*Pixel.imageData.width*4  + y*4 + 1],
            b:Pixel.imageData.data[x*Pixel.imageData.width*4  + y*4 + 2],
            a:Pixel.imageData.data[x*Pixel.imageData.width*4  + y*4 + 3]
        };
    };
    
    static setPixel(red,green,blue,alpha,x,y){

        alpha = alpha || 255;

        Pixel.imageData.data[x*Pixel.imageData.width*4 + y*4] = red;
        Pixel.imageData.data[x*Pixel.imageData.width*4  + y*4 + 1] = green;
        Pixel.imageData.data[x*Pixel.imageData.width*4  + y*4 + 2] = blue;
        Pixel.imageData.data[x*Pixel.imageData.width*4  + y*4 + 3] = alpha;
    };
    
    static pos2index(){  
        /**
        *
        */
    };
    
    static index2pos(){  
    
    };
    
    static getPixelByIndex(){
    
    };
    
    static setPixelByIndex(){
    
    };
};
