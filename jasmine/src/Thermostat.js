'use strict';

function Thermostat() {
  this.DEFAULT = 20
  this._maxTemp = 25;
  this._minTemp = 10;
  this.currentTemp = this.DEFAULT;
  this._INCREMENT = 1;
  this._powerSavingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this.currentTemp;
};

Thermostat.prototype.increase = function() {
  if (this._powerSavingMode && this.currentTemp <= this._maxTemp)
    this.currentTemp += this._INCREMENT;
  else if (this.currentTemp <= this._maxTemp) {
    this.currentTemp += this._INCREMENT;
  }
};

Thermostat.prototype.decrease = function() {
  if (this.currentTemp >= this._minTemp)
    this.currentTemp -= this._INCREMENT;
};

Thermostat.prototype.powerSavingMode = function(mode) {
  this._powerSavingMode = mode;
  if (this._powerSavingMode) {
    this._maxTemp = 25;
  }
  else {
    this._maxTemp = 32;
  }
}

Thermostat.prototype.reset = function() {
  this.currentTemp = this.DEFAULT;
}
