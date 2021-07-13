leftwristx = 0;
rightwristx = 0;
difference = 0;

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,600);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = leftwristx - rightwristx;

        console.log("left wrist x : " + leftwristx);
        console.log("right wrist x : " + rightwristx);

        document.getElementById("font_size_tag").innerHTML = difference.toFixed(0) + "px";
    }

}

function draw(){
    background('#969A7');

    textSize(difference);
    fill('#738bff');
    text('naren',150,250);
}