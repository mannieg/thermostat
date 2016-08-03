var thermostat = new Thermostat();
var currentTemp;

function getTempDecimal(){
  currentTemp = thermostat.temperature() / thermostat.MAX_TEMP;
}

$('#increase_btn').click(function() {
  thermostat.increase();
  getTempDecimal();
  bar.animate(currentTemp);
});

$('#reset_btn').click(function() {
  thermostat.reset();
  getTempDecimal();
  bar.animate(currentTemp);
});

$('#decrease_btn').click(function() {
  thermostat.decrease();
  getTempDecimal();
  bar.animate(currentTemp);
});

$( document ).ready(function() {
  getTempDecimal();
  bar.animate(currentTemp);
});

$('.onoffswitch-checkbox').change(function() {
  if($(this).is(":checked")) {
    $("#power-saving-status").text("On");
    thermostat.switchPowerSavingModeOn();
  } else {
    $("#power-saving-status").text("Off")
    thermostat.switchPowerSavingModeOff();
  }
})

var bar = new ProgressBar.Circle(container, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f16621', width: 1 },
  to: { color: '#b9401a', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    circle.setText(thermostat.currentTemp + '&deg;C');

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '4rem';
