var Gpio = require('onoff').Gpio;
var red = new Gpio(18,'out');
var green = new Gpio(20, 'out');
var blue = new Gpio(21, 'out');

red.writeSync(0);
green.writeSync(1);
blue.writeSync(1);
