$ (document).ready(function() {

  var thermostat = new Thermostat();

  $( "#temperature-up" ).click(function() {
    thermostat.up();
    update_temp();
  });

  function update_temp(){
    $('#temperature').text(thermostat.currentTemperature());
  };

  $( "#temperature-down" ).click(function() {
    thermostat.down();
    update_temp();
  });

  $( "#temperature-reset" ).click(function() {
    thermostat.reset();
    update_temp();
  });

  $( "#powersaving-on" ).click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $( "#powersaving-off" ).click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });



});
