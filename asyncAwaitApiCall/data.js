async  function datafetch(){
    try {
       const res= await fetch('https://jsonplaceholder.typicode.com/todos/')
       const data=   await res.json()

        let table=document.createElement("table")
        table.border="1"
        let hearderRow= document.createElement('tr')
        let hearderData=["id","title"]
        hearderData.forEach((item,index)=>{
            let hearder=document.createElement("th")
            hearder.textContent=item
            hearderRow.appendChild(hearder)
        })
       
        document.body.appendChild(hearderRow)

        data.map((item,index)=>{
            console.log(item.title)
            let tr=document.createElement("tr")

            let forid= document.createElement("td")
            forid.textContent=item.id
            let foritem=document.createElement("td")
            foritem.textContent=item.title
            tr.appendChild(forid)
            tr.appendChild(foritem)
            table.appendChild(tr)
              })
     
              document.body.appendChild(table)

       // console.log(data)
    } catch (error) {
        console.log(error,"not found data")  
    }
}
    

