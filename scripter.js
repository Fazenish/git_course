"use strict";

function getMessage () {
    let message = "hello";
    return message;
}

let message = getMessage();
function showMessage(message) {
    return message + " heh";
}

function calcSun (R) {
    let S = 3.14 * R**2;
    return S;
}

function isPrime (beginWith, endWith) {
    let flag = 1;
    let primeCount = 0;
    for (let i = beginWith; i < endWith; i++) {
        flag = 1;
        for (let j = 2; j < i; j++) {
            if (i % j == 0){
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            primeCount++;
            console.log(`The ${primeCount} prime is ${i}`);
        }
    }
}

isPrime(200, 300);

// function isPrime (beginWith, endWith) {
//     let flag;
//     let primeCount;
//     let i;
//     let j;

//     i = beginWith;
//     primeCount = 0;
//     while (i < endWith)
//     {
//         flag = 1;
//         while (j < i)
//         {
//             if (i % j == 0)
//             {
//                 flag = 0;
//                 break;
//             }
//         }
//         if (flag == 1)
//         {
//             primeCount++;
//             console.log(`The ${primeCount} prime is ${i}`);
//         }
//     }
// }


alert(`message is ${getMessage()}`);
// alert (`showMessage is ${showMessage(message)}`);
// alert(`Square of Sun is ${calcSun(3)}`);