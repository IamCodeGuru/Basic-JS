//Scope
// Async operations

//Person object
//3 Props
//Name,age,salary
//4 person ---> Array

const add1 = (a, b) =>
{ 
    console.log('Add1');
    console.log(this);
    return a + b;

};
console.log(add1(2,3))

function add2(a,b){
    console.log('Add2');
    console.log(this);
    return a+b;
}

console.log(add2(2,3))
