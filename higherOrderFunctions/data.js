let arr=[1,2,3,4,5,6,7,8,9,10];

const res= arr.map((item,index)=>{
    return item*2
})
console.log(res);

//higher order function
const higherOrderFunction=(callback)=>{
    return callback();
}
const callback=()=>{
    return "Hello from callback function";
}
const result=higherOrderFunction(callback);
console.log(result);

//A function that takes another function as an argument or returns a function.