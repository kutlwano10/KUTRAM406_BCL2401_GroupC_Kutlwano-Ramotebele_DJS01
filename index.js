/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
let velocityInKmHour = 10000; // velocity (km/h)
const accelerationInSec = 3 ; // acceleration (m/s^2)
const timeInSec = 3600; // seconds (1 hour)
const initialDistanceInKm = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const accelerationInKm = accelerationInSec * 3.6;
const timeInHour = timeInSec / 3600;

const newDistance = initialDistanceInKm + (velocityInKmHour * timeInHour) //calcultes new distance
const RemainingFuel = fuel - fuelBurnRate * timeInSec //calculates remaining fuel

const newVelocity = calcNewVelocity(accelerationInKm, velocityInKmHour , timeInSec ) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVelocity(acceleration, velocity, time) { 
  // console.error("jhfjh");
    if(acceleration === accelerationInKm && velocity === velocityInKmHour && time === timeInSec){
      return velocity + (acceleration * time )
    }else{
     throw Error("Invalid inputs");
    }
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${RemainingFuel} kg`);


// - **New Velocity**: Approximately 48880 km/h after correction.
// - **New Distance**: Approximately 10000 km after correction.
// - **Remaining Fuel**: Approximately 3,200 kg after correction.



