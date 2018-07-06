/*
// Returns a formated string with with the count of books of every category 
// within the list passes in.
//
// The first argument is a list of books. Every book is represented by a string.
// The string has a book code and count for that book separated by a string.
// The first letter of each book is its category.
// example for each book: "CBART 20"
// example for list: ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// 
// The second argument is a list of categories. 
//
// The response must be formated as such:
// listOfArt = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// listOfCat = ["A", "B", "C", "W"]
// res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
//
// NOTE: If the count for all of the categories is zero, it should return an empty string.
// I just realized that I should be checking in the beggining if either the first argument, or the second argument are empty and then return an empty string inmediately. As opposed to checking if count for all of the categories is zero. But this is the solution that I submitted.
*/

function stockList(listOfArt, listOfCat) {
  const categoryCount = listOfCat.map(cat => {
    const catTotal = listOfArt.reduce((total, art) => {
      return art[0] === cat ? (total += +art.split(" ")[1]) : total + 0;
    }, 0);
    return [cat, catTotal];
  });

  if (categoryCount.every(x => x[1] === 0)) {
    return "";
  } else {
    return categoryCount
      .map(([category, count]) => `(${category} : ${count})`)
      .join(" - ");
  }
}

// BEST SOLUTION (BY USER flynntsc):
// function stockList(listOfArt, listOfCat) {
//   if (!listOfArt.length || !listOfCat.length) return ''
//   return listOfCat.map(w => {
//     const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
//     return `(${w} : ${s})`
//   }).join(' - ')
// }

// SIMMILAR TO WHAT I WAS TRYING TO DO BUT A LOT MORE READABLE.
// I ALSO HAD TO CHANGE MINE BECAUSE I THOUGHT THAT I NEEDED TO CHECK IF
// THE COUNT OF EVERY BOOK WAS ZERO, WHICH MADE MINE A LOT WORSE.
// BUT CREDIT WHERE CREDIT IS DUE.
