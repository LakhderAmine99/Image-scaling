export default class ImageScaling {

    constructor(imageData){
        this.imageData = imageData;
    };

    /**
     * 
     * @param {data} data 
     * @returns {ImageData} ImageData
     */
    NearestNeighborsInterpolation(){

        let originalData = this.imageData.data;
        
        /**
         * implementation of the algo..
         */

        let newData = new ImageData(this.imageData.width*2,this.imageData.height*2);
        let data = newData.data;

        alert("scaling...");
       
        return newData;
    };
};

