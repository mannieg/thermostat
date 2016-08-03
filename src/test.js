var thermostat = new Thermostat();

$('#increase_btn').click(function() {
  thermostat.increase();
  var currentTemp = thermostat.temperature() / thermostat.MAX_TEMP;
  bar.animate(currentTemp);
});
