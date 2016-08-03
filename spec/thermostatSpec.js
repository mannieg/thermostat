'use strict';

describe('Thermostat', function(){

var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
});

  it('starts at a temperature of 20 degrees', function(){
    expect(thermostat._temperature).toEqual(20);
  });

  describe('increase temperature', function(){
    it('increases temperature by using the up button', function(){
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(21);
    });
  });

  describe('decrease temperature', function() {

    it('decreases temperatur by using the down button', function() {
      thermostat.down();
      expect(thermostat.currentTemperature()).toEqual(19);
    });

    it('has a minimum temperature of 10 degrees', function() {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(function() {thermostat.down();}).toThrowError("The minimum temperature is 10");
    });


  });

});
