/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h) to seconds
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

//SOLUTION:
//**New Velocity**: Approximately 48880 km/h after correction.
//**New Distance**: Approximately 10000 km after correction.
//**Remaining Fuel**: Approximately 3,200 kg after correction.



//CONVERTIONS:
const velocityChange = velocity*1000 / time; //changed velocity to seconds
console.log(`vel change` + velocityChange)

const timeByHour = time/3600;

const distance2 = distance + (velocityChange*time /1000) //calcultes new distance (velocity * time - in km)
console.log(`New Distance: ` + distance2);

const remainingFuel = fuel - (fuelBurnRate*time) //calculates remaining fuel
console.log(`fuel remaining: ` + remainingFuel)

console.log(48880-(acceleration*time)*3600/1000)
console.log(48880-velocityChange)

const newVelocity = calcNewVel(velocityChange, acceleration, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(initialVelocity, acceleration, time)  { 
    
   
  return initialVelocity + (acceleration*time);
}

const outputVelocity = newVelocity * 3600 / 1000;
console.log(`Corrected New Velocity: ${outputVelocity} km/h`);  // BOOOOOM!!!!! Finally, there we go.
console.log(`Corrected New Distance: ${distance2} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






//_______________________________________________________________________________________________________________________________
/*
// TRIED:

    //let velChange = vel*(1000/ time); //changed velocity to seconds
    //console.log(velChange) //2777.77777778
    
//_______________________________________________________________________________________________________________________________

// COMMENTS & NOTES:

    1.  After many hours of working on it, unfortunately I succumbed to the tyrannical quick fix of chat gpt for more explanation
        However, I allowed myself to struggles for many hours before.

    2.  Confident, I can explain this.

    3.  Tougher than I had expected - could have managed time better.  i.e. Never under estimate your opponent.


*/
//________________________________________________________________________________________________________________________________



