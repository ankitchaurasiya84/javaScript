const data=[
    {
        name:"John",
        age:30,
    }, 
    {
        name:"Jane",
        age:25,
    }, 
    {
        name:"Doe",
        age:35,
    }, 
    {
        name:"Smith",
        age:28,
    }, 
    {
        name:"Emily",
        age:22,
    },
]
const fetchdata=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data.length<0){
                resolve(data)
            }
            reject("No data found")
        })
    })
}
fetchdata().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}
)
// // The fetchdata function returns a promise that resolves with the data array after a delay of 1 second.