import Canvas2D from "../src/lib/canvas/Canvas2D.mjs";
import ImageProcessing from "../src/lib/root/ImagePrecessing.mjs";

function NearestNeighborsInterpolation(){

    let canvas = document.querySelector('canvas');
    let finalCanvas = document.querySelector('#result-canvas');
    let btn = document.getElementById('nni');
    let image = new Image();
    let imageProcessing = null;
    let canvas2d = new Canvas2D(canvas);;
    let resultCanvas2d = new Canvas2D(finalCanvas);;

    this.start = function(){  

        console.log("runing the app...");

        loadImageData();
        
        btn.addEventListener('click',(e)=>{
            
            imageProcessing = new ImageProcessing(canvas2d.getImageData());
            resultCanvas2d.putImageData(imageProcessing.NNI()); 

        },false);
    };

    function loadImageData(){

        image.src = "../assets/images/riz.jpg";

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
        window.app = new NearestNeighborsInterpolation();
        window.app.start();
    }
};

setup();