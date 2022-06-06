"use strict";

let double = n => n * 2; // arrow

let d2_args = (n, l) => n * l;

double(3); // 6

let sayHi = () => alert('hello!'); // arrow

sayHi();

let age = prompt("how old are you? ");

let welcome = age < 18 ?
    () => alert('Hello!') :
    () => alert("konnichiwa"); //arrow

welcome();

age = prompt("how old are you? ");
let welc = age < 18 ?
    function () { alert('Hello!'); } : //func_expression
    function () { alert("konnichiwa"); };

alert("welc = ");
welc();

// many line arrow func:

let factorial = nbr => {
    if (nbr== 0) {
        return 1;
    }
    else {
        return factorial(nbr-1)*nbr;
    }

}

alert('4! = ' + factorial(4));
console.log(`5! = ${factorial(5)}`);
// 4! = 4*3*2*1

// fac(1) = fac(0) * 1 = 1
// fac(2) = fac(1) * 2 = 2
// fac(3) = fac(2) * 3 = 6
// fac(4) = fac(3) * 4 = 24