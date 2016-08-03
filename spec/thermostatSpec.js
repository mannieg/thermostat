'use strict';

describe('Thermostat', function(){

var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
});

  it('starts at a temperature of 20 degrees', function(){
    expect(thermostat._DefaultTemperature).toEqual(20);
  });

  describe('increase temperature', function(){
    it('increases temperature by using the up button', function(){
      thermostat.up();
      expect(thermostat._DefaultTemperature).toBeGreaterThan(20);
    });
  });

});
