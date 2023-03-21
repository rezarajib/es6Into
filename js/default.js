// function add(numberOne, numberTwo){
//     console.log(numberOne, numberTwo);
    // numberTwo = numberTwo || 0;
    // if(numberTwo === undefined){
    //     numberTwo = 0;
    // }
//     const total = numberOne + numberTwo;
//     return total;
// }

function fullName(numberOne, numberTwo = 'reza'){
    const total = numberOne + '' + numberTwo;
         return total;
}

const result = fullName('rajib');
console.log(result);
