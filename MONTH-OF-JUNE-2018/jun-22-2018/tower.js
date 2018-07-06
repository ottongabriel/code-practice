
/*
// Returns an array of arrays that, when printed out forms a tower. EG: if 'nFloors = 4', then tower will be:
// tower = [
  ['...*...'],
  ['..***..'],
  ['.*****.'],
  ['*******']
];
// assume that dots are spaces.
*/
function towerBuilder(nFloors) {
  // build here
  let tower = [];
  for (let i = 1; i <= nFloors; i++){
    const spaces = ' '.repeat(nFloors - i);
    const asterisks = '*'.repeat((i * 2) - 1);
    tower.push(`${spaces}${asterisks}${spaces}`);
  }
  return tower;
}

/*
// BEST SOLUTION
*/
// function towerBuilder(n) {
//   return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
// }