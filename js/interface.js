"use strict";
/* globals Thermostat: false */
/* globals bar: false */

var thermostat = new Thermostat();
var currentTemp,
    city;

function getTempDecimal(){
  currentTemp = thermostat.temperature() / thermostat.MAX_TEMP;
  bar.animate(currentTemp);
  changeTempColor();
}

function changeTempColor(){
  if (thermostat.powerUsage() === 'low-usage') {
    $('.progressbar-text').css('color', '#9ACD32');
  } else if (thermostat.powerUsage() === 'medium-usage') {
    $('.progressbar-text').css('color', '#ffffff');
  } else {
    $('.progressbar-text').css('color', '#FF8C00');
  }
}

function getWeather(q) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?';
  var api = '&APPID=8e294e4884174ccaf295c1098548b598';
  var units = '&units=metric';
  $.get(url + q + api + units, function( data ) {
    $('.location_temp').text('The temperature in ' + data.name + ' is ' +
                              data.main.temp +
                              String.fromCharCode(176) + 'C');
      city = data.name;
      postThermostatApi();
  });
}

function postThermostatApi() {
  $.post('http://192.168.0.6:4567/thermostat', {
          city: city, temperature: thermostat.temperature(),
          psm: thermostat.isPowerSavingModeOn() }, function() {
  });
}

function getThermostatApi() {
  $.get('http://192.168.0.6:4567/thermostat', function( data ) {
    var obj = $.parseJSON(data);
    if(obj.city) {
      getWeather('q=' + obj.city);
      city = $('#city_input').val(obj.city);
    }
    if(obj.temperature > 0){
      thermostat.currentTemp = obj.temperature;
      getTempDecimal();
    }
  });
}

$('#increase_btn').click(function() {
  thermostat.increase();
  getTempDecimal();
  postThermostatApi();
});

$('#reset_btn').click(function() {
  thermostat.reset();
  getTempDecimal();
  postThermostatApi();
});

$('#decrease_btn').click(function() {
  thermostat.decrease();
  getTempDecimal();
  postThermostatApi();
});

$( document ).ready(function() {
  getTempDecimal();
  getThermostatApi();
});

$('.onoffswitch-checkbox').change(function() {
  if($(this).is(":checked")) {
    $("#power-saving-status").text("On");
    thermostat.switchPowerSavingModeOn();
  } else {
    $("#power-saving-status").text("Off");
    thermostat.switchPowerSavingModeOff();
  }
  postThermostatApi();
});

$('form').on( "submit", function( event ) {
  event.preventDefault();
  getWeather( $( this ).serialize() );
});
