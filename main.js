Prediction= "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+ data_uri+ '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pWonh9gg2/model.json', modelLoaded);

function modelLoaded(){
    console.log('model is loaded!');
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data="The prediction is "+ Prediction;

    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}