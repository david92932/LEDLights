const express = require('express');
const bodyParser = require('body-parser');
const piControl = require('./piControl.js');
const ejs = require('ejs');

const app = express();

var power = 'Off';
var red = 0;
var green = 0;
var blue = 0;

//middleware/routing

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response)
{

  response.render('form.ejs', {power: power,
                                red: red,
                                green: green,
                                blue: blue});

});

app.get('/LEDLights', function(request, response)
{

  response.sendFile('__dirname + /views/form.html');
});

app.get('/submit_action', function(request, response)
{

  console.log('Power: ' + request.query['power']);
  console.log('Red: ' + request.query['red']);
  console.log('Green: ' + request.query['green']);
  console.log('Blue: ' + request.query['blue']);

  //get radio buttons to behave correctly
  power = request.query['power'];
  red = request.query['red'];
  green = request.query['green'];
  blue = request.query['blue'];

  piControl.controlPower(power);

  if (power == "On" && (red != 0 || green != 0 || blue != 0))
      piControl.controlColor(red, green, blue);

  response.redirect('/');
});

app.listen(8080);
