const 

 var controlPower = function(power)
  {

      if(power == "On")
        console.log('Pi is on');

      else
      console.log('Pi is off');
  }

  var controlColor = function(red, green, blue)
  {

    console.log('Red: ' + red);
    console.log('Green: ' + green);
    console.log('Blue: ' + blue);

  }

module.exports = {

  controlPower: controlPower,
  controlColor: controlColor

};
