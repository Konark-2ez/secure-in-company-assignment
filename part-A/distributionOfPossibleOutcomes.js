const numberOfFaces = 6;
const diceA = [1,2,3,4,5,6]
const diceB = [1,2,3,4,5,6]
const possibleCombinations = []

for(let i=0;i<numberOfFaces;i++){
    possibleCombinations[i] = []
    for(let j=0;j<numberOfFaces;j++){
        possibleCombinations[i][j] = [diceA[i],diceB[j]]
    }
}
console.log(possibleCombinations)


//Mathematics
/* 
  There are two dice and each die has 6 faces with each number as 1,2,3,4,5,6 respectively
   Dice A = {1,2,3,4,5,6}
   Dice B = {1,2,3,4,5,6}
   total possible outcomes = {
     {1,1},{1,2},{1,3},{1,4},{1,5},{1,6},
     {2,1},{2,2},{2,3},{2,4},{2,5},{2,6},
     {3,1},{3,2},{3,3},{3,4},{3,5},{3,6},
     {4,1},{4,2},{4,3},{4,4},{4,5},{4,6},
     {5,1},{5,2},{5,3},{5,4},{5,5},{5,6},
     {6,1},{6,2},{6,3},{6,4},{6,5},{6,6}
   }

*/
