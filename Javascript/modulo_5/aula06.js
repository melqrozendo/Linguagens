console.log('Array Tridimensionais:');

let month = [];

let week1 = [];
let week2 = [];

let avgTemp1 = [1,2,3,4,5];
let avgTemp2 = [6,7,8,9,10];
let avgTemp3 = [11,12,13,14,15];
let avgTemp4 = [16,17,18,19,20];

week1 = [avgTemp1, avgTemp2];
week2 = [avgTemp3, avgTemp4];

month = [week1, week2];

console.log(month[0][0][4]); // 5

for(let x=0; x < month.length; x++) {
    for(let y=0; y < month[x].length; y++) {
        for(let z=0; z < month[x][y].length; z++) {
            console.log(month[x][y][z]);
        }
    }
}

