/*
// Returns the number of pasangers left in a bus after the last stop
// Receives an array of arrays. Each of the inner arrays represents 
// the number of people who got in and out for each of the stops.
// For each of the inner arays, the first number is the number of people
// who got in, and the second is the number of people who got out. EG:
// input -> [[10,0],[3,5],[5,8]]
// output -> 5
*/
var number = function(busStops) {
  return busStops.reduce((total, inOut) => total + inOut[0] - inOut[1], 0);
};

// BEST SOLUTION:
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
// NOTICE WHAT YOU CAN DO WHEN YOU KNOW EXACTLY HOW EACH OF THE INNER ARRAYS ARE FORMATED. MUCH MORE READABLE.
