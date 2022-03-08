import Canvas2D from "../src/lib/Canvas2D.mjs";
import ImageProcessing from "../src/lib/ImagePrecessing.mjs";

function NearestNeighborsInterpolation(){

    let canvas = document.querySelector('canvas');
    let btn = document.getElementById('nni');
    let image = new Image();
    let imageProcessing = null;
    let canvas2d = new Canvas2D(canvas);;

    this.start = function(){  

        console.log("runing the app...");

        loadImageData();
        
        btn.addEventListener('click',(e)=>{
            
            imageProcessing = new ImageProcessing(canvas2d.getImageData());
            canvas2d.putImageData(imageProcessing.NNI()); 

        },false);
    };

    function loadImageData(){

        image.src = "../assets/images/test.png";
        image.width = 658;
        image.height = 658;

        image.onload = function(){
            console.log("image data loaded.");

            canvas2d.setWidth(image.width);
            canvas2d.setHeight(image.height);
            canvas2d.draw(image,0,0);
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