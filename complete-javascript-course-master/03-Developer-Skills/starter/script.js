// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function printForecast(arr) {
  let forecast = '';

  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}°C in ${1 + i} days ... `;
  }

  console.log('... ' + forecast);
}

printForecast([12, 5, -5, 0, 4]);
