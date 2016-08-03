'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20°c", function() {
    expect(thermostat.temperature()).toEqual(20);
  });
  it("increases temperature with up button", function(){
    thermostat.increase();
    expect(thermostat.temperature()).toBeGreaterThan(20);
  });
  it("decreases temperature with down button", function(){
    thermostat.decrease();
    expect(thermostat.temperature()).toBeLessThan(20);
  });
  it("does not decrease if temperature is < 10", function(){
    for (var i = 0; i <= 10; i++) {
      thermostat.decrease();
    };
    expect(thermostat.decrease()).toThrow("Cannot go below minimum temperature of 10");
    // expect(thermostat.temperature()).toEqual(10);
  });
});
