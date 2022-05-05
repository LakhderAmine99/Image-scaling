import ImageScaling from "../image_scaling/ImageScaling.mjs";

export default class ImageProcessing {

    #IS = null;

    /**
     * 
     * @param {ImageData} imageData 
     */
    constructor(imageData){
        this.imageData = imageData;
        this.#IS = new ImageScaling(this.imageData);
    };

    NNI(){
        return this.#IS.NearestNeighborsInterpolation();
    };

};
