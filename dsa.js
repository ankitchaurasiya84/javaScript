
// Find the maximum number in an array
// let arr=[1,2,3,4,5,32,2]

// function foo(arr) {
//     let min=0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >min) {
//             min=arr[i]
//         }
//     }
//     return min
// }
// console.log(foo(arr))



//check if the array is sorted 
// let arr=[1,2,3,4,5,6,7,8,9]
// function foo(arr) {
//     for (let i = 1; i < arr.length; i++) {
//        if(arr[i] < arr[i-1]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(foo(arr))


//Second Largest Element in an Array without sorting
// function foo(arr) {
//     let max=-Infinity
//     let secondMax;
//     for(let num of arr){
//         if(num>max){
//             secondMax=max
//              max=num
        
//         }
//         else if(num>secondMax && num!=max){
//             secondMax=num
//         }

//     }
//     return secondMax

// }
// console.log(foo([1,2,3,4,5,6,7,8,9,12,8,2]))


//Left Rotate the Array by One

// function foo(arr) {
// // using lib functions
// //    let elem= arr.shift() 
// //    arr.push(elem)
// //    return arr
// let arr1=[...arr]
// for(let i=0; i<arr.length; i++){
//        arr1[i]=arr[i+1]
//        if(i==arr.length-1){
//         arr1[i]=arr[0]
//        }
// }
// return arr1
// }
// console.log(foo([1,2,3,4,5]))

// Find the maximum consecutive 1's in an array
// function foo(arr) {
//     let count=0
//     let maxCount=0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 1) {
//          count++
//          maxCount=count>maxCount?count:maxCount
//     }
//     else {
//         count=0
//     }
// }
// return maxCount
// }
// console.log(foo([1,1,0,0,2,1,1,1,0,1,1]))