/*
// Receives a string, 
// Returns an array with all of the stages of a 'wave' for that string.
// In this fashion:
// input: ''
// output -> ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']
// NOTE: If the character to make uppercase is a space, 
// move on to the next character instead.
// For my implementation I just took those out at the end, because it was easier to
// read and think about it for me.
*/
function wave(s) {
  return s
    .split("")
    .map((message, mi) =>
      s
        .split("")
        .map((letter, li) => (mi === li ? letter.toUpperCase() : letter))
        .join()
    )
    .filter((message, i) => message[i] !== " ");
}

// BEST SOLUTION (BY: smile67 AND Heathercoraje):
var wave = w =>
  [...w]
    .map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1))
    .filter(a => a != w);
// NOTICE HOW THE SAME THING IS ACHIEVED BY USING SLICE TWICE, RATHER THAN,
// A SPLIT, A MAP, AND A JOIN.
// NOTICE HOW THE FILTER CHECK CAN BE SIMPLIFIED. WHAT THEY ARE DOING IS CHECKING IF
// THE MESSAGE THAT THEY ARE LOOKING AT THAT POINT IN TIME IS IDENTICAL TO THE
// ORIGINAL ONE. IF IT IS, THEN THAT MEANS THAT THE CARACTER THAT WAS MADE UPERCASE
// BY THE PREVIOUS OPERATION WAS A SPACE, AND WE CAN IGNORE THAT MEMBER OF THE
// ARRAY SINCE IT DOESN'T CONTRIBUTE TO THE WAVE.
