console.log('Array Bidimensionais:');

let avgTemp = [];

let avgTemp1 = [23,24,21,25,33];
let avgTemp2 = [23,24,27,25,30];

avgTemp[0] = avgTemp1;
avgTemp[1] = avgTemp2;

console.log(avgTemp[1][3])

for(let i=0; i < avgTemp.length; i++) {
    for(let j=0; j < avgTemp[i].length; j++) {
        console.log(avgTemp[i][j]);
    }
}

