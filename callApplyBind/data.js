//functionName.call(thisValue, arg1, arg2, ...)
// call method not work with arrow function
//.call() is a built-in JavaScript method that allows you to call a function with a specific this value and arguments provided one by one

const  cook =function(rajma,chawal){
    console.log(` ${this.name} bnao bhai ${rajma} aur ${chawal}`)

}
const chef={name:"ankit"}

cook.call(chef,"rajma","chawal")


// apply passed as array

const  cook1 =function(rajma,chawal){
    console.log(` ${this.name} bnao bhai ${rajma} aur ${chawal}`)

}
const chef1={name:"ankit"}

cook1.apply(chef1,["rajma","chawal"])


// bind passed 


const  cook2 =function(rajma,chawal){
    console.log(` ${this.name} bnao bhai ${rajma} aur ${chawal}`)

}
const chef2={name:"ankit"}

let bindfunction=cook1.bind(chef1,"rajma","chawal")
bindfunction()




// **`.call()`** invokes the function immediately with arguments passed individually,
// **`.apply()`** invokes the function immediately with arguments passed as an array,
// **`.bind()`** returns a new function with fixed `this` and optionally preset arguments (not invoked immediately).
