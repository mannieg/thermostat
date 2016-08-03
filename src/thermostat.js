'user strict';

function Thermostat (){
  this._temperature = 20;
  this._minimumTemp = 10;
}

Thermostat.prototype.up = function (){
  this._temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this._minimumTemp >= this.currentTemperature()) {
    throw new Error("The minimum temperature is 10");
  }
  this._temperature -= 1;
};

Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};
