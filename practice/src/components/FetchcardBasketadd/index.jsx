import React, { useEffect, useState } from 'react'
import "./index.css"
const FetchBasket = () => {
    const [api, setApi] = useState([])
    const [count, setCount] = useState(0)
    const [local, setLocal] = useState(
        localStorage.getItem("local")
          ? JSON.parse(localStorage.getItem("local"))
          : []
      );

    function getApi(){
        fetch("https://northwind.vercel.app/api/products")
        .then(res => res.json())
        .then(data=>setApi(data))
    }
    useEffect(() => {
     getApi()
    }, [])
    useEffect(() => {
        localStorage.setItem("local", JSON.stringify(local));
      }, [local]);

     function add(x){
        setLocal([...local,x]);
     }
function remove(newitem){
    setLocal(local.filter((x)=>x.id !==newitem))
}
  return (
    <div>
        <div className='Basket'>
           <h1>Basket</h1> 
           {local.map((item)=>{
            return(
            <ul >
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>count:{count}</li>
                <button onClick={()=>remove(item.id)}>Remove</button>
            </ul>
                )})}
        </div>

        <div>
            {api.map((x)=>{
            return(
            <ul>
                <li>{x.id}</li>
                <li>{x.name}</li>
                <button onClick={()=>add(x)}>Add Basket</button>
            
            </ul>
                )})}
        </div>

    </div>
  )
}

export default FetchBasket