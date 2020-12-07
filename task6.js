'use strict'

//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
//В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5)
// и вернуть полученное значение (применить switch).

function summation(a, b) {
    return a + b;
}

function deduction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function splitting(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return summation(arg1, arg2);
        case '-':
            return deduction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return splitting(arg1, arg2);
    }
}

var arg1 = parseInt(prompt('Введите первый аргумент'))
var arg2 = parseInt(prompt('Введите второй аргумент'))
var oper = prompt('Введите знак операции')


alert(mathOperation(arg1, arg2, oper));

