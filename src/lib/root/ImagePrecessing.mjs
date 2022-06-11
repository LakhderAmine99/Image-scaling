import ImageScaling from "../core/ImageScaling.mjs";

export default class ImageProcessing {

    /**
     * 
     * @type {ImageScaling}
     * @instanceOf {ImageScaling}
     * 
     */
    #IS = null;

    /**
     * 
     * @param {ImageData} imageData 
     * @example
     * 
     * const imageData = new ImageData(width, height);
     * 
     * const imageProcessing = new ImageProcessing(imageData);
     * 
     */
    constructor(imageData){
        this.imageData = imageData;
        this.#IS = new ImageScaling(this.imageData);
    };

    /**
     * 
     * @returns {ImageData} The new scaled imageData with KNN algorithm.
     * @example
     * 
     * const imageProcessing = new ImageProcessing(imageData);
     * 
     * const imageData = imageProcessing.KNN();
     * 
     */
    NNI(kernelSize){
        return this.#IS.NearestNeighborsInterpolation(kernelSize);
    };

    /**
     * 
     * @returns {ImageData} The new scaled imageData with Lerp algorithm.
     */
    LERP(){
        return this.#IS.LinearInterpolation();
    };

};