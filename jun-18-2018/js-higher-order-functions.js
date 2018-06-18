const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


/*
// BASIC FOR LOOP EXMPLE
*/
for(let i = 0; i < companies.length; i++){
  console.log(`companies[${i}]: `, companies[i]);
}



/*
// BASIC FOR-EACH EXAMPLE
*/
companies.forEach((company) => {
  console.log('company name: ', company.name);
})



/*
// USE OF FILTER FUNCTION EXAMPLE
*/

// TRYING TO GET ALL AGES OVER 21 WITH A REGULAR OL' FOR-LOOP: //
let canDrink = [];
for(let i = 0; i < ages.length; i++){
  if(ages[i] >= 21){
    canDrink.push(ages[i]);
  }
}
// console.log('canDrink: ', canDrink);
// END TRYING TO GET ALL AGES OVER 21 WITH A REGULAR OL' FOR-LOOP END //

// LONGER VERSION OF FILTER 21 AND OLDER //
const canDrink = ages.filter(age =>{
  if(age >= 21){
    return true;
  }
})
// console.log('canDrink: ', canDrink);
// END LONGER VERSION OF FILTER END //

// SHORTER VERSION OF SAME FILTER //
const canDrink = ages.filter(age => age >= 21);
// console.log('canDrink: ', canDrink);
// END SHORTER VERSION OF FILTER END //


// FILTER COMPANIES ES5 WAY //
const retailCompanies = companies.filter(function(company){
  if(company.category === 'Retail'){
    return true;
  }
});
// console.log('retailCompanies: ', retailCompanies);
// END FILTER COMPANIES ES5 WAY END //

// FILTER COMPANIES SHORT WAY //
const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log('retailCompanies: ', retailCompanies);
// END FILTER COMPANIES SHORT WAY END //

// FILTER ALL COMPANIES FOUNDED IN THE 80'S //
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);
// console.log('eightiesCompanies: ', eightiesCompanies);
// END FILTER ALL COMPANIES FOUNDED IN THE 80'S END //

// FILTER ALL COMPANIES THAT LASTED AT LEAST 10 YEARS //
const decaAnnualCompanies = companies.filter(company => company.end - company.start >= 10);
// console.log('decaAnnualCompanies: ', decaAnnualCompanies);
// END FILTER ALL COMPANIES THAT LASTED AT LEAST 10 YEARS END //



/*
// MAP EXAMPLES
*/

// ARRAY OF COMPANY NAMES //
const companyNames = companies.map(company => company.name);
// console.log('companyNames: ', companyNames);
// END ARRAY OF COMPANY NAMES END //

// COMPANY NAMES WITH START AND END DATES //
const nameStartEnd = companies.map(company => `${company.name}: [${company.start} - ${company.end}]`)
// console.log('nameStartEnd: ', nameStartEnd);
// END COMPANY NAMES WITH START AND END DATES END //

// ROOT OF ALL AGES //
// (SQUARE ROOT FOR EACH OF THE AGES IN THE AGES ARRAY) //
const agesRoot = ages.map(age => Math.sqrt(age));
// console.log('agesRoot: ', agesRoot);
// ROOT OF ALL AGES //

// AGES SQUARED //
const agesSquared = ages.map(age => age * age);
// console.log('agesSquared: ', agesSquared);
// END AGES SQUARED END //

// ROOT TIMES TWO //
const agesRootTimesTwo = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);
// console.log('agesRootTimesTwo: ', agesRootTimesTwo);
// -----THIS IS A BIT OF A CONTRIVED EXAMPLE BUT IT ILUSTRATES THAT .MAP CAN BE CHAINED, AND THUS BE MADE VERY POWERFUL----- //

// END ROOT TIMES TWO END //



/*
// SORT EXAMPLES
*/

// SORTING COMPANIES BY START DATE //

// ---LONG WAY---
const sortCompaniesByStart = companies.sort(function(c1,c2){
  if(c1.start > c2.start){
    return 1;
  }
  else{
    return -1;
  }
})
// console.log('sortCompaniesByStart: ', sortCompaniesByStart);

// ---SHORT WAY---
const sortCompaniesByStart = companies.sort((a,b) => a.start > b.start ? 1 : -1)
// console.log('sortCompaniesByStart: ', sortCompaniesByStart);

// END SORTING COMPANIES BY START DATE END //


// SORTING AGES //

// ---this method might seem like it is working fine, until you realize that it is only sorting by the first character. Note how the number '5' is after '45' and before '54'---
const sortAges = ages.sort()
// console.log('sortAges: ', sortAges);

// ---sorting lowest to highest---
const sortAges = ages.sort((a,b) => a - b);
// console.log('sortAges: ', sortAges);

// ---sorting highest to lowest---
const sortAges = ages.sort((a,b) => b - a);
// console.log('sortAges: ', sortAges);

// END SORTING AGES END //




/*
// REDUCE EXAMPLES
*/

// ADDING ALL AGES WITH A FOR LOOP //

let ageSum = 0;
for(let i = 0; i < ages.length; i++){
  ageSum += ages[i];
}
// console.log('ageSum: ', ageSum);

// END ADDING ALL AGES WITH A FOR LOOP END //


// ADDING ALL AGES WITH REDUCE LONG WAY //

const ageSum = ages.reduce(function(total,age) {
  return total + age;
}, 0);
// console.log('ageSum: ', ageSum);

// END ADDING ALL AGES WITH REDUCE LONG WAY END //


// ADDING ALL AGES WITH REDUCE THE SHORT WAY //

const ageSum = ages.reduce((total, age) => total + age, 0)
// console.log('ageSum: ', ageSum);

// END ADDING ALL AGES WITH REDUCE THE SHORT WAY END //


// GETTING THE TOTAL TIME THAT ALL COMPANIES STAYED OPEN //

const totalYearsForAll = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log('totalYearsForAll: ', totalYearsForAll);

// END GETTING THE TOTAL TIME THAT ALL COMPANIES STAYED OPEN END //




/*
// COMBINING METHODS!!!
*/

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a,b) => a - b)
  .reduce((total, age) => total + age, 0)

// console.log('combined: ', combined);