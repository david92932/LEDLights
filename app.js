const express = require('express');
const bodyParser = require('body-parser');
const piControl = require('./piControl.js');
const ejs = require('ejs');

const app = express();

var power = 'Off';
var red;
var green;
var blue;

var lastRed = "Off";
var lastGreen = "Off";
var lastBlue = "Off";

var redInt = 1;
var greenInt = 1;
var blueInt = 1;

//middleware/routing

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response)
{

  response.render('form.ejs', {power: power,
                                red: lastRed,
                                green: lastGreen,
                                blue: lastBlue});

});

app.get('/LEDLights', function(request, response)
{

  response.sendFile('__dirname + /views/form.html');
});

app.get('/submit_action', function(request, response)
{

  //get radio buttons to behave correctly
  power = request.query['power'];

	if(!(document.getElemenyById('power').checked))
		power = "On";
	
  red = request.query['red'];

	if (!(document.getElementById('red').checked))
		red = lastRed;
	else lastRed = red;

  green = request.query['green'];
	
	if(green == "undefined")
		green = lastGreen;
	else lastGreen = green;

  blue = request.query['blue'];
	
	if(blue == "undefined")
		blue = lastBlue;
	else lastBlue = blue;
console.log(power);
console.log(red);
console.log(green);
console.log(blue);
 // piControl.controlPower(power);

  	if(red == "On") redInt = 0;
	else redInt = 1;

	if (green == "On") greenInt = 0;
	else greenInt = 1;

	if(blue == "On") blueInt = 0;
	else blueInt = 1; 

      	piControl.controlColor(power, redInt, greenInt, blueInt);

  response.redirect('/');
});

app.listen(8080);
