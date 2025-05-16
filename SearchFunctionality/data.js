let arr=["Ankit","ankita","ram","kumar","rohit","Mahima","anjali"]

function datahandle(event){
    event.preventDefault()
    let search=document.getElementById("data").value
    console.log(search)
    let resultList=document.getElementById("result")
    resultList.innerHTML=""

    let mapdata=arr.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))
    mapdata.forEach((item)=>{
        let li = document.createElement("li");
        li.textContent=item
        resultList.appendChild(li)

    })
    
}