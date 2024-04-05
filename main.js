img = "";
status = "";
objects = [];
function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;

}
function gotResults(error,results){

    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
    }
function draw(){
    image(video, 0, 0, 380, 380);  
    if(status != "")
    {

        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status : Objects Detecter";
            document.getElementById("number_of_objects").innerHTML = "Number of object detected are :"+ object.length;
            fill(r,g,b);
            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    
    
}


function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResults);

}
function gotResults(error,results){

if(error){
    console.log(error);
}
console.log(results);
objects = results;
}

