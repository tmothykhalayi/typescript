"use strict";
// //Operators and controlflows
// interface Human {
//     eyes:number
// }
// interface Person extends Human {
//     name:string ,
//     age:number ,
//     Adress:{
//         city:string,
//         country:string ,
//         street:number,
//         zip:number
//     },
//     hobbies:string[]
// }
// const john :Person = {
//     name:'John',
//     age:30,
//     Adress:{
//         city:'kutus',
//         country:'kerugoya',
//         street:65,
//         zip:50109
//     },
//     hobbies:['reading','gaming'],
//     eyes:2
// }
// console.log(john.hobbies);
// console.log(john.Adress.city);
//for loops
var height = 5;
for (var interfaces = 0; interfaces < height; interfaces++) {
    var result = '';
    for (var j = 0; j <= interfaces; j++) {
        result += '*';
    }
    console.log(result);
}
//for in loops
var person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (var key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        console.log("".concat(key, ": ").concat(person[key]));
    }
}
//for of loops
var array = [1, 2, 3, 4, 5];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log(value);
}
