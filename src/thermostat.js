'user strict';

function Thermostat (){
  this._DefaultTemperature = 20;
}

Thermostat.prototype.up = function (){
  this._DefaultTemperature += 1;
};
