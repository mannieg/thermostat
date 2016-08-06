"use strict";

function Thermostat() {
  this.DEFAULT = 20;
  this.MAX_TEMP = 32;
  this.MIN_TEMP = 10;
  this.PS_MAX_TEMP = 25;
  this.LOW_USAGE = 18;
  this.MEDIUM_USAGE = 25;
  this.currentTemp = this.DEFAULT;
  this._INCREMENT = 1;
  this._powerSavingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this.currentTemp;
};

Thermostat.prototype.increase = function() {
  if (this.isMaxTemp() === true) {
    return;
  }
  this.currentTemp += this._INCREMENT;
};

Thermostat.prototype.decrease = function() {
  if(this.currentTemp > this.MIN_TEMP){
    this.currentTemp -= this._INCREMENT;
  }
};

Thermostat.prototype.reset = function() {
  this.currentTemp = this.DEFAULT;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this._powerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this._powerSavingMode = false;
};

Thermostat.prototype.isMaxTemp = function() {
  if(this.isPowerSavingModeOn() === true) {
    return this.temperature() === this.PS_MAX_TEMP;
  }
  return this.temperature() === this.MAX_TEMP;
};

Thermostat.prototype.powerUsage = function() {
  if (this.currentTemp < this.LOW_USAGE) {
    return "low-usage";
  }
  else if (this.currentTemp < this.MEDIUM_USAGE){
    return "medium-usage";
  }
  else {
    return "high-usage";
  }
};
