/*
// Implementation of an Esolang (Esotaric Programing Language)
// Receives a string that represents a series of commands in the language.
// Each caracter in the string is an individual command.
// Possible commands:
//   '+' -> Increment the memory cell
//   '.' -> Output the ascii value of the memory cell
// 
// The Memory Cell starts at 0;
*/
function myFirstInterpreter(code) {
  let theString = "";
  let memCell = 0;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "+") memCell < 255 ? memCell++ : (memCell = 0);
    else if (code[i] === ".") theString += String.fromCharCode(memCell);
  }
  return theString;
}

// BEST SOUTION[0]:

// function myFirstInterpreter(code) {
//   let out = "", byte = 0;
//   [...code].forEach( cmd => { switch(cmd){
//     case "+" : byte = (byte+1)%256; break;
//     case "." : out += String.fromCharCode(byte); break;
//   }} )
//   return out
// }

// BEST SOLUTION[1]:
// function myFirstInterpreter(code) {
//   return code
//     .replace(/[^\+\.]/g, '')
//     .match(/\+*\./g)
//     .map(x => x.length - 1)
//     .reduce((acc, cur) => {
//       acc.push(cur + (acc[acc.length - 1] || 0));
//       return acc;
//     }, [])
//     .map(x => String.fromCharCode(x % 256))
//     .join('');
// }
