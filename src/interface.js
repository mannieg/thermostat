$ (document).ready(function() {

  var thermostat = new Thermostat();

  $('.get-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    get_city_temp(city);
  });

  $( "#temperature-up" ).click(function() {
    thermostat.up();
    update_temp();
  });

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

  function get_city_temp(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
    var key = "&APPID=8e294e4884174ccaf295c1098548b598";
    var units = "&units=metric";
    $.get(url + key + units, function(data) {
      $('#outside-temp').text('The temperature for ' + city + ' ' + data.main.temp);
    });
  }

  function update_temp(){
    $('#temperature').text(thermostat.currentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

});
