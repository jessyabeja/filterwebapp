noseX=0;
noseY=0;

function preload(){
//clownnose = loadImage('https://e7.pngegg.com/pngimages/101/800/png-clipart-handlebar-moustache-beard-moustache-fashion-monochrome-thumbnail.png');

}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video, modelLoaded);

posenet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log('Posenet is Initiallised');
}

function gotposes(results) {

    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y-15;
        console.log("nose x ="+results[0].pose.nose.x);
       console.log("nose y ="+results[0].pose.nose.y);
    }
}
function draw(){
image(video,0,0,300,300);
image(clownnose, noseX, noseY, 100,100);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX, noseY, 20);
//filter(INVERT);
//filter(BLUR, 3);
}

function take_snapshot(){
    save("myFilterImage.png");
}