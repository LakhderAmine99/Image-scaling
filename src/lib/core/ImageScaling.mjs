import MathHelper from "../math/MathHelper.mjs";

/**
 * @namespace {ImageScaling}
 * @class
 * 
 */

export default class ImageScaling {

    /**
     * 
     * @param {ImageData} imageData 
     */
    constructor(imageData){
        this.imageData = imageData;
    };

    /**
     * 
     * @param {Number} kernelSize 
     * @defaultKernelSize = 2 
     * @returns {ImageData} The new scaled imageData with KNN algorithm.
     */
    NearestNeighborsInterpolation(kernelSize=2){

        let originalData = this.imageData.data;
        let newData = new ImageData(this.imageData.width*kernelSize,this.imageData.height*kernelSize);
        let data = newData.data;

        for(let i=0 ; i<newData.height ; i++)
        {
            for(let j=0 ; j<newData.width ; j++)
            {
                data[i*newData.width*4 + j*4] = originalData[Math.floor(i*(1/kernelSize))*this.imageData.width*4 + Math.floor(j*(1/kernelSize))*4];
                data[i*newData.width*4 + j*4 +1] = originalData[Math.floor(i*(1/kernelSize))*this.imageData.width*4 + Math.floor(j*(1/kernelSize))*4 +1];
                data[i*newData.width*4 + j*4 +2] = originalData[Math.floor(i*(1/kernelSize))*this.imageData.width*4 + Math.floor(j*(1/kernelSize))*4 +2];
                data[i*newData.width*4 + j*4 +3] = originalData[Math.floor(i*(1/kernelSize))*this.imageData.width*4 + Math.floor(j*(1/kernelSize))*4 +3];
            }
        }

        return newData;
    };

    /**
     * 
     * @returns {ImageData} The new scaled imageData with Lerp algorithm.
     */
    LinearInterpolation(){
        /**
         * lerp algorithm implementation
         */

        let originalData = this.imageData.data;
        let newData = new ImageData(this.imageData.width*2,this.imageData.height*2);
        let data = newData.data;

        for(let i=0 ; i<newData.height ; i++)
        {
            for(let j=0 ; j<newData.width ; j++)
            {
                data[i*newData.width*4 + j*4] = originalData[i*newData.width*4 + j*4];
                data[i*newData.width*4 + j*4 + 1] = originalData[i*newData.width*4 + j*4 + 1];
                data[i*newData.width*4 + j*4 + 2] = originalData[i*newData.width*4 + j*4 + 2];
                data[i*newData.width*4 + j*4 + 3] = originalData[i*newData.width*4 + j*4 + 3];

                if(j%2 === 0 || i%2 === 0)
                {
                    data[i*newData.width*4 + j*4] = originalData[i*newData.width*4 + j*4];
                    data[i*newData.width*4 + j*4 + 1] = originalData[i*newData.width*4 + j*4 + 1];
                    data[i*newData.width*4 + j*4 + 2] = originalData[i*newData.width*4 + j*4 + 2];
                    data[i*newData.width*4 + j*4 + 3] = originalData[i*newData.width*4 + j*4 + 3];
                }
                else 
                {
                    data[i*newData.width*4 + j*4] = originalData[i*newData.width*4 + j*4];
                    data[i*newData.width*4 + j*4 + 1] = originalData[i*newData.width*4 + j*4 + 1];
                    data[i*newData.width*4 + j*4 + 2] = originalData[i*newData.width*4 + j*4 + 2];
                    data[i*newData.width*4 + j*4 + 3] = originalData[i*newData.width*4 + j*4 + 3];
                }
            }
        }

        return newData;
    };
};

