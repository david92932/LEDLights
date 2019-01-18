var Gpio = require('onoff').Gpio;

var ledRed = new Gpio(18, 'out');
var ledGreen = new Gpio(20, 'out');
var ledBlue = new Gpio(21, 'out');

 var controlPower = function(power)
  {

      if(power == "On"){

       		 console.log('Pi is on');
			ledRed.writeSync(redValue);
                       ledGreen.writeSync(greenValue);
                       ledBlue.writeSync(blueValue);

	}

      else {
     		  console.log('Pi is off');
		      ledRed.writeSync(1);
		      ledGreen.writeSync(1);
		      ledBlue.writeSync(1);
	}

  }

  var controlColor = function(power, red, green, blue)
  {
	
	if(power == "On")
	{

		ledRed.writeSync(red);
		ledGreen.writeSync(green);
		ledBlue.writeSync(blue);

	}
	   

	else
	{

		ledRed.writeSync(1);
		ledGreen.writeSync(1);
		ledBlue.writeSync(1);
		
	}

  }

  /*var blink = function();
  {




  }*/

module.exports = {

  controlPower: controlPower,
  controlColor: controlColor//,
  //blink: blink

};
