"use strict";
let greet = Function;
greet = () => {
    console.log('hello world!');
};
const add;
(a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(10, 20);
const minus = (a, b) => {
    return a + b;
    console.log(minus);
};
minus(10, 23);
const add = (a, b) => {
    return a + b;
};
const logmsg = (message) => {
    console.log(message);
};
logmsg('hello');
logmsg(add(2, 3));
let multiply = function (c, d) {
    return c * d;
};
logmsg(multiply(3, 5));
const total = (...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logmsg(total(2, 3, 4));
const createerror = (errmsg) => {
    throw new Error(errmsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
