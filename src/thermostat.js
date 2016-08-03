'user strict';

function Thermostat (){
  this._temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.up = function (){
  if (this.isMaximumTemperature()) {
    return;
  }
  this._temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this._temperature -= 1;
};

Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this._temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingModeOn() === false) {
    return this._temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this._temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
}
// Thermostat.prototype.setPowerSaveOn = function () {
//   this.maximumTemperature = 25;
// };
//
// Thermostat.prototype.setPowerSaveOff = function () {
//   this.maximumTemperature = 32;
// }
