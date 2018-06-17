let multiDArray = [[1],[2,[3],4],5];

console.log(multiDArray);

function flattenArray(theArr){
  let flattenedArr = [];
  for(let i = 0; i < theArr.length; i++){
    if(Array.isArray(theArr[i])){
      flattenedArr.push(...flattenArray(theArr[i]));
    }
    else{
      flattenedArr.push(theArr[i]);
    }
  }
  return flattenedArr;
}

let theFlattendArr = flattenArray(multiDArray);

console.log(theFlattendArr);