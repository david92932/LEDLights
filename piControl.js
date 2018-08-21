var Gpio = require('pigpio').Gpio;

var ledRed = new Gpio(27, {mode:Gpio.OUTPUT});
var ledGreen = new Gpio(17, {mode:Gpio.OUTPUT});
var ledBlue = new Gpio(22, {mode:Gpio.OUTPUT});

 var controlPower = function(power,red,green,blue)
  {

      if(power == "On"){

       		console.log('Pi is on');
		ledRed.pwmWrite(red);
		ledGreen.pwmWrite(green);
		ledBlue.pwmWrite(blue);

	}

      else {
     		console.log('Pi is off');
		ledRed.pwmWrite(0);
		ledGreen.pwmWrite(0);
		ledBlue.pwmWrite(0);
	}

  }

  var controlColor = function(red, green, blue)
  {

	console.log('Red: ' + red);
   	console.log('Green: ' + green);
  	console.log('Blue: ' + blue);
	ledRed.pwmWrite(red);
	ledGreen.pwmWrite(green);
	ledBlue.pwmWrite(blue);

  }

module.exports = {

  controlPower: controlPower,
  controlColor: controlColor

};
