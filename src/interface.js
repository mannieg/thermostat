var thermostat = new Thermostat();
var currentTemp;

function getTempDecimal(){
  currentTemp = thermostat.temperature() / thermostat.MAX_TEMP;
  bar.animate(currentTemp);
  changeBackground();
}

function changeBackground(){
  if (thermostat.powerUsage() == 'low-usage') {
    $('.progressbar-text').css('color', '#9ACD32')
  } else if (thermostat.powerUsage() == 'medium-usage') {
    $('.progressbar-text').css('color', '#ffffff')
  } else {
    $('.progressbar-text').css('color', '#FF8C00');
  }
}

$('#increase_btn').click(function() {
  thermostat.increase();
  getTempDecimal();
});

$('#reset_btn').click(function() {
  thermostat.reset();
  getTempDecimal();
});

$('#decrease_btn').click(function() {
  thermostat.decrease();
  getTempDecimal();
});

$( document ).ready(function() {
  getTempDecimal();
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

$('form').on( "submit", function( event ) {
  event.preventDefault();
  getWeather( $( this ).serialize() );
});

function getWeather(q) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?';
  var api = '&APPID=8e294e4884174ccaf295c1098548b598';
  var units = '&units=metric';
  $.get(url + q + api + units, function( data ) {
    $('.location_temp').text('The temperature in ' + data.name + ' is ' +
                              data.main.temp +
                              String.fromCharCode(176) + 'C');
  });
}

var bar = new ProgressBar.Circle(container, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#FF8C00', width: 1 },
  to: { color: '#FFA500', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    circle.setText(thermostat.currentTemp + '&deg;C');

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '4rem';
