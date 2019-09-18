var c = document.getElementById("canvasA");
var ctx = c.getContext("2d");
var d = document.getElementById("canvasB");
var ctx2 = d.getContext("2d");
var initialHeight = 500;
var initialWidth = 320;
c.width = initialWidth;
c.height = initialHeight;
d.width = initialWidth;
d.height = initialHeight;
var background = new Image();
background.src = "https://sykjagni.sirv.com/jTkeSmK.gif";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.drawImage(background,0,0);  
    tireFunction();
    newTireFunction();
};

function tireFunction(){ //first set
ctx.clearRect(0, 0, 320, 500);
ctx.drawImage(background,0,0);  
var ratio = 500;
var width = (document.getElementById("width").value) * 12;
var offset = (document.getElementById("offset").value) / 2;
var tireWidth = (parseInt(document.getElementById("tireWidth").value)) / 4;
var tireProfile = (parseInt(document.getElementById("tireProfile").value)) * 1.1;
var tireDiameter = (parseInt(document.getElementById("tireDiameter").value)) * 12.5;

var tiredWidth = parseInt(document.getElementById("tireWidth").value);
var tiredProfile = parseInt(document.getElementById("tireProfile").value);
var tiredDiameter = parseInt(document.getElementById("tireDiameter").value);
var tireSidewall = (tiredWidth * (tiredProfile / 100)) / 25.4;
var tireHeight = ((((tiredWidth * (tiredProfile / 100)) * 2) + (tiredDiameter * 25.4)) / 25.4);

document.getElementById('diameterOne').innerHTML = (tireHeight).toFixed(2);
document.getElementById('circumferenceOne').innerHTML = (3.14159 * tireHeight).toFixed(2);
document.getElementById('sidewallOne').innerHTML = tireSidewall.toFixed(2);
document.getElementById('widthOne').innerHTML = (tiredWidth / 25.4).toFixed(2);
document.getElementById('revOne').innerHTML = (63360 / (3.14159 * tireHeight)).toFixed(0);

document.getElementById('diameterPercentage').innerHTML = ((((parseFloat(document.getElementById('diameterTwo').innerHTML) - parseFloat(document.getElementById('diameterOne').innerHTML)) / parseFloat(document.getElementById('diameterOne').innerHTML) * 100)) || 0).toFixed(0) + '%';
document.getElementById('circumferencePercentage').innerHTML = (((parseFloat(document.getElementById('circumferenceTwo').innerHTML) - parseFloat(document.getElementById('circumferenceOne').innerHTML)) / parseFloat(document.getElementById('circumferenceOne').innerHTML) * 100) || 0).toFixed(0) + "%";
document.getElementById('sidewallPercentage').innerHTML = (((parseFloat(document.getElementById('sidewallTwo').innerHTML) - parseFloat(document.getElementById('sidewallOne').innerHTML)) / parseFloat(document.getElementById('sidewallOne').innerHTML) * 100) || 0).toFixed(0) + "%";
document.getElementById('widthPercentage').innerHTML = (((parseFloat(document.getElementById('widthTwo').innerHTML) - parseFloat(document.getElementById('widthOne').innerHTML)) / parseFloat(document.getElementById('widthOne').innerHTML) * 100) || 0).toFixed(0) + "%";
document.getElementById('revPercentage').innerHTML = (parseFloat(document.getElementById('revTwo').innerHTML) - parseFloat(document.getElementById('revOne').innerHTML) || 0).toFixed(0);

var widthValue = 15 + parseInt(width);
var offsetValue = 140 + parseInt(offset) - parseInt(width)/2;
var midpoint1 = (441 - tireDiameter) /2;
var midpoint2 = (441 + tireDiameter) /2;

tireProfile = ((tireHeight * 12.25) - (midpoint2 - midpoint1)) / 2;
//draw fender line
ctx.beginPath();
ctx.strokeStyle = "#FF0000";
ctx.moveTo(100, 0);
ctx.lineTo(100, 500);
ctx.stroke();
ctx.closePath();

//draw rectangle
ctx.beginPath();
ctx.strokeStyle = "#FF0000";
ctx.lineWidth = 2.5;
ctx.rect(offsetValue, (441 - tireDiameter) /2, widthValue, tireDiameter); //x,y,width,height
ctx.stroke();
ctx.closePath();
var tireWidth2 = offsetValue + tireWidth + (widthValue/2);
var tireWidth1 = offsetValue - tireWidth + (widthValue/2);

//draw lines on top and below the rectangle tire width
ctx.beginPath();
ctx.moveTo(tireWidth1, (midpoint1 - tireProfile)); //midpoint of rectangle
ctx.lineTo(tireWidth2, (midpoint1 - tireProfile));
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(tireWidth1, midpoint2 + tireProfile); //midpoint of rectangle
ctx.lineTo(tireWidth2, midpoint2 + tireProfile);
ctx.stroke();
ctx.closePath();

//draw two lines connecting the tire widths to the base of the rectangle
ctx.beginPath();
ctx.moveTo(tireWidth1, midpoint1 - tireProfile);
ctx.lineTo(offsetValue, midpoint1);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(tireWidth2, midpoint1 - tireProfile); 
ctx.lineTo(offsetValue + widthValue, midpoint1);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(tireWidth1, midpoint2 + tireProfile);
ctx.lineTo(offsetValue, midpoint2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(tireWidth2, midpoint2 + tireProfile); 
ctx.lineTo(offsetValue + widthValue, midpoint2);
ctx.stroke();
ctx.closePath();
}

function newTireFunction(){
ctx2.clearRect(0, 0, 320, 500);

var width = (document.getElementById("newWidth").value) * 12;
var offset = (document.getElementById("newOffset").value) / 2;
var tireWidth = (parseInt(document.getElementById("newTireWidth").value)) / 4;
var tireProfile = (parseInt(document.getElementById("newTireProfile").value)) * 1.1;
var tireDiameter = (parseInt(document.getElementById("newTireDiameter").value)) * 12.5;

var tiredWidth = parseInt(document.getElementById("newTireWidth").value);
var tiredProfile = parseInt(document.getElementById("newTireProfile").value);
var tiredDiameter = parseInt(document.getElementById("newTireDiameter").value);
var tireSidewall = (tiredWidth * (tiredProfile / 100)) / 25.4;

var tireHeight = (((tiredWidth * (tiredProfile / 100)) * 2) + (tiredDiameter * 25.4)) / 25.4;

document.getElementById('diameterTwo').innerHTML = (tireHeight).toFixed(2);
document.getElementById('circumferenceTwo').innerHTML = (3.14159 * tireHeight).toFixed(2);
document.getElementById('sidewallTwo').innerHTML = tireSidewall.toFixed(2);
document.getElementById('widthTwo').innerHTML = (tiredWidth / 25.4).toFixed(2);
document.getElementById('revTwo').innerHTML = (63360 / (3.14159 * tireHeight)).toFixed(0);

document.getElementById('diameterPercentage').innerHTML = ((((parseFloat(document.getElementById('diameterTwo').innerHTML) - parseFloat(document.getElementById('diameterOne').innerHTML)) / parseFloat(document.getElementById('diameterOne').innerHTML) * 100)) || 0).toFixed(0) + '%';
document.getElementById('circumferencePercentage').innerHTML = (((parseFloat(document.getElementById('circumferenceTwo').innerHTML) - parseFloat(document.getElementById('circumferenceOne').innerHTML)) / parseFloat(document.getElementById('circumferenceOne').innerHTML) * 100) || 0).toFixed(0) + "%";
document.getElementById('sidewallPercentage').innerHTML = (((parseFloat(document.getElementById('sidewallTwo').innerHTML) - parseFloat(document.getElementById('sidewallOne').innerHTML)) / parseFloat(document.getElementById('sidewallOne').innerHTML) * 100) || 0).toFixed(0) + "%";
document.getElementById('widthPercentage').innerHTML = (((parseFloat(document.getElementById('widthTwo').innerHTML) - parseFloat(document.getElementById('widthOne').innerHTML)) / parseFloat(document.getElementById('widthOne').innerHTML) * 100) || 0).toFixed(0) + "%";
document.getElementById('revPercentage').innerHTML = (parseFloat(document.getElementById('revTwo').innerHTML) - parseFloat(document.getElementById('revOne').innerHTML) || 0).toFixed(0);


var widthValue = 15 + parseInt(width);
var offsetValue = 140 + parseInt(offset) - parseInt(width)/2;
var midpoint1 = (441 - tireDiameter) /2;
var midpoint2 = (441 + tireDiameter) /2;

tireProfile = ((tireHeight * 12.25) - (midpoint2 - midpoint1)) / 2;

//draw rect
ctx2.beginPath();
ctx2.strokeStyle = "#0000FF";
ctx2.lineWidth = 2.5;
ctx2.rect(offsetValue, (441 - tireDiameter) /2, widthValue, tireDiameter); //x,y,width,height
ctx2.stroke();
ctx2.closePath();

var tireWidth2 = offsetValue + tireWidth + (widthValue/2);
var tireWidth1 = offsetValue - tireWidth + (widthValue/2);

//draw lines on top and below the rectangle
ctx2.beginPath();
ctx2.moveTo(tireWidth1, (midpoint1 - tireProfile)); //midpoint of rectangle
ctx2.lineTo(tireWidth2, (midpoint1 - tireProfile));
ctx2.stroke();
ctx2.closePath();
ctx2.beginPath();
ctx2.moveTo(tireWidth1, midpoint2 + tireProfile); //midpoint of rectangle
ctx2.lineTo(tireWidth2, midpoint2 + tireProfile);
ctx2.stroke();
ctx2.closePath();

//draw two lines connecting the tire widths to the base of the rectangle
ctx2.beginPath();
ctx2.moveTo(tireWidth1, midpoint1 - tireProfile);
ctx2.lineTo(offsetValue, midpoint1);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(tireWidth2, midpoint1 - tireProfile); 
ctx2.lineTo(offsetValue + widthValue, midpoint1);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(tireWidth1, midpoint2 + tireProfile);
ctx2.lineTo(offsetValue, midpoint2);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(tireWidth2, midpoint2 + tireProfile); 
ctx2.lineTo(offsetValue + widthValue, midpoint2);
ctx2.stroke();
ctx2.closePath();
}