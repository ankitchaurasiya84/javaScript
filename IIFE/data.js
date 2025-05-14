const greet=()=>{
    console.log("Hello from IIFE");
}
// greet()
(function(){
    console.log("Hello from IIFE")
}
)();
// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.