const data=()=>{
    let a=10;
    let b=20;
    const sum=()=>{
         console.log(a+b);
    }
    return sum
}

data()() 


// data() is a function that returns another function (sum).
// The outer function (data) creates a closure that captures the variables a and b.
// The inner function (sum) has access to the variables a and b even after the outer function has finished executing.
// This is an example of a closure in JavaScript.


// currying

const Curring=(a)=>{
  
    const sum1=(b)=>{
       
         console.log(a+b);
    }
    return sum1
}

Curring(12)(12) // 24