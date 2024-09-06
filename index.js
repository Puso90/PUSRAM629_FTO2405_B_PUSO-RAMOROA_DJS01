/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h) to seconds
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

//SOLUTION:
//**New Velocity**: Approximately 48880 km/h after correction.
//**New Distance**: Approximately 10000 km after correction.
//**Remaining Fuel**: Approximately 3,200 kg after correction.
function calcNewVel(vel, acc, time)  { 
    
   
  return vel + (acc*time)*3600/1000
}
//CONVERTIONS:
let velChange = vel*1000 / time; //changed velocity to seconds
console.log(velChange)

let timeByHour = time/3600;

const d2 = d + (vel*timeByHour) //calcultes new distance
console.log(`New Distance: ` + d2);

const rf = fuel - (fbr*time) //calculates remaining fuel
console.log(`fuel remaining: ` + rf)

console.log(48880-(acc*time)*3600/1000)
console.log(48880-velChange)

const vel2 = calcNewVel(acc, velChange, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors


console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);


/*
//let velChange = vel*(1000/ time); //changed velocity to seconds
//console.log(velChange) //2777.77777778
*/