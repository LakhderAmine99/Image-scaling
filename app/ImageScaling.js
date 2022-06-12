import Canvas2D from "../src/lib/canvas/Canvas2D.mjs";
import ImageProcessing from "../src/lib/root/ImagePrecessing.mjs";

function ImageScalingDemo(){

    let canvas = document.querySelector('canvas');
    let finalCanvas = document.querySelector('#result-canvas');
    let scale = document.getElementById('scale');
    let image = new Image();
    let imageProcessing = null;
    let canvas2d = new Canvas2D(canvas);;
    let resultCanvas2d = new Canvas2D(finalCanvas);;

    this.start = function(){  

        console.log("runing the app...");

        let valueOfScale = parseInt(scale.value);

        loadImageData();

        scale.addEventListener('mousemove',(e)=>{

            valueOfScale = parseInt(scale.value);
            
            imageProcessing = new ImageProcessing(canvas2d.getImageData());
            resultCanvas2d.putImageData(imageProcessing.NNI(valueOfScale)); 

        },false);

    };

    /**
     * @description Loading the image and draw it into the canvas.
     * 
     */
    function loadImageData(){

        image.src = "../assets/images/plage.jpg";

        image.onload = function(){
            console.log("image data loaded.");

            canvas2d.setWidth(image.width);
            canvas2d.setHeight(image.height);
            
            resultCanvas2d.setWidth(image.width);
            resultCanvas2d.setHeight(image.height);

            canvas2d.draw(image,0,0);
            resultCanvas2d.draw(image,0,0);
        };

        image.onerror = () => {
            alert("error in loading image data...");
        };
    };

    function render(){
        return false;
    }

};

const setup = () => {

    window.onload = () => {
        window.app = new ImageScalingDemo();
        window.app.start();
    }
};

setup();