import NNI from "./NNI.mjs";

export default class ImageProcessing {

    #NNI = null;

    /**
     * 
     * @param {ImageData} imageData 
     */
    constructor(imageData){
        this.imageData = imageData;
    };

    NNI(){
        this.#NNI = new NNI(this.imageData);
        return this.#NNI.NearestNeighborsInterpolation();
    };

};