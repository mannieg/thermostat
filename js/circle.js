'use strict';
/* globals ProgressBar: false */
/* globals container: false */
/* globals thermostat: false */

var bar = new ProgressBar.Circle(container, {
color: '#fff',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 5,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
  autoStyleContainer: false
},
from: { color: '#FF8C00', width: 1 },
to: { color: '#FFA500', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.path.setAttribute('stroke-width', state.width);

  circle.setText(thermostat.currentTemp + '&deg;C');

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '4rem';
