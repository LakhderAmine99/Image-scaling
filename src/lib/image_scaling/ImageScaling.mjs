import Pixel from "../pixels/Pixel.mjs";

export default class ImageScaling {

    constructor(imageData){
        this.imageData = imageData;
    };

    /**
     * 
     * @param {data} data 
     * @returns {ImageData} ImageData
     * 
     */
    NearestNeighborsInterpolation(){

        let originalData = this.imageData.data;
        
        /**
         * implementation of the algo..
         */

        let newData = new ImageData(this.imageData.width*2,this.imageData.height*2);
        let data = newData.data;

        for(let i=0 ; i<newData.height ; i++)
        {
            for(let j=0 ; j<newData.width ; j++)
            {
                data[i*newData.width*4 + j*4] = originalData[Math.floor(i*0.5)*this.imageData.width*4 + Math.floor(j*0.5)*4];
                data[i*newData.width*4 + j*4 +1] = originalData[Math.floor(i*0.5)*this.imageData.width*4 + Math.floor(j*0.5)*4 +1];
                data[i*newData.width*4 + j*4 +2] = originalData[Math.floor(i*0.5)*this.imageData.width*4 + Math.floor(j*0.5)*4 +2];
                data[i*newData.width*4 + j*4 +3] = originalData[Math.floor(i*0.5)*this.imageData.width*4 + Math.floor(j*0.5)*4 +3];
            }
        }

        return newData;
    };
};

