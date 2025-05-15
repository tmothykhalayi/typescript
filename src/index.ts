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
let height :number =5;
for(let interfaces = 0; interfaces < height; interfaces++){
    let result = '';
    for(let j = 0; j <= interfaces; j++){
        result += '*';
    }
    console.log(result);
}
//for in loops
const person = {
    name:'John',
    age:30,
    city:'New York'

}
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }
}
//for of loops
const array = [1,2,3,4,5];
for (const value of array) {
    console.log(value);
}   
