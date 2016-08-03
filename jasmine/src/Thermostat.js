'use strict';

function Thermostat() {
  this.DEFAULT = 20;
  this.MAX_TEMP = 32;
  this.MIN_TEMP = 10;
  this.PS_MAX_TEMP = 25;
  this.currentTemp = this.DEFAULT;
  this._INCREMENT = 1;
  this._powerSavingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this.currentTemp;
};

Thermostat.prototype.increase = function() {
  if (this.isMaxTemp === true) {
    return;
  }
  this.currentTemp += this._INCREMENT;
}

Thermostat.prototype.decrease = function() {
  this.currentTemp -= this._INCREMENT;
};

Thermostat.prototype.reset = function() {
  this.currentTemp = this.DEFAULT;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this._powerSavingMode = true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this._powerSavingMode = false;
}

Thermostat.prototype.isMaxTemp = function() {
  if(this.isPowerSavingModeOn() === true) {
    return this.temperature === this.PS_MAX_TEMP;
  }
  return this.temperature === this.MAX_TEMP;
}
