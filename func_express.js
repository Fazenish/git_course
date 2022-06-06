"use strict";

function sayBye() {
    alert("goodbye moth343refuccker!");
}

// above is function declaration

let func = sayBye; // works. Writes a function, not its value!


let sayHi = function () {      // this is function expression
    alert("hello moth343refuccker!");  
};

// let smth = ... ;

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function showOk() {
    alert("Вы согласны!");
}

function showCancell() {
    alert("Вы отменили выполнение.");
}

ask("Вы согласны?", showOk, showCancell);

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

let age = prompt("Сколько Вам лет?", 18);

// в зависимости от условия объявляем функцию
if (age < 18) {

  function welcome() {
    alert("Привет!");
  }

} else {

  function welcome() {
    alert("Здравствуйте!");
  }

}

// ...не работает
// welcome(); // Error: welcome is not defined

age = 16; // присвоим для примера 16

if (age < 18) {
  welcome();               // \   (выполнится)
                           //  |
  function welcome() {     //  |
    alert("Привет!");      //  |  Function Declaration доступно
  }                        //  |  во всём блоке кода, в котором объявлено
                           //  |
  welcome();               // /   (выполнится)

} else {

  function welcome() {
    alert("Здравствуйте!");
  }
}

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

// welcome(); // Ошибка: welcome is not defined

age = prompt("Сколько Вам лет?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Привет!");
  };

} else {

  welcome = function() {
    alert("Здравствуйте!");
  };

}

welcome(); // теперь всё в порядке