function Thermostat() {
  this._degrees = 20;
}

Thermostat.prototype.temperature = function() {
  return this._degrees;
};

Thermostat.prototype.increase = function() {
  this._degrees += 1
};

Thermostat.prototype.decrease = function() {
  if (this._degrees <= 10)
    {throw "Cannot go below minimum temperature of 10"}
  else {this._degrees -= 1};
};
