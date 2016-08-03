'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20°c", function() {
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT);
  });

  it("increases temperature with up button", function(){
    thermostat.increase();
    expect(thermostat.temperature()).toBeGreaterThan(thermostat.DEFAULT);
  });

  it("decreases temperature with down button", function(){
    thermostat.decrease();
    expect(thermostat.temperature()).toBeLessThan(thermostat.DEFAULT);
  });

  it("does not decrease if temperature is < 10", function(){
    for (var i = 1; i <= thermostat._minTemp; i++) {
      thermostat.decrease();
    };
    expect(thermostat.temperature()).toEqual(thermostat._minTemp);
  });

  it("resets the temperature back to default", function() {
    thermostat.increase();
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT);
  })

  describe("Power Saving Mode", function() {
    it("Power saving mode is on by default", function(){
      expect(thermostat._powerSavingMode).toBeTruthy();
    });

    it("Set power saving mode to off", function() {
      thermostat.powerSavingMode(false);
      expect(thermostat._powerSavingMode).toBeFalsy();
    });

    it("Max default temperature is 25", function() {
      for (var i = 1; i <= 5; i++){
        thermostat.increase();
      }
      expect(thermostat.temperature()).toEqual(thermostat._maxTemp);
    });

    it("Max temperature when off", function() {
      thermostat.powerSavingMode(false);
      for(var i = 1; i <= 12; i++){
        thermostat.increase();
      }
      expect(thermostat.temperature()).toEqual(thermostat._maxTemp);
    });
  });
});
