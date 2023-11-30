import React from 'react'
import { useEffect, useState } from "react";
import "./style.css"
const WishList = () => {
    const [api, setApi] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [local, setLocal] = useState(
      localStorage.getItem("local")
        ? JSON.parse(localStorage.getItem("local"))
        : []
    );
    function getApi() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setApi(data);
          setIsloading(false);
        });
    }
    useEffect(() => {
      getApi();
    }, []);
    useEffect(() => {
      localStorage.setItem("local", JSON.stringify(local));
    }, [local]);
    function add(x){
      setLocal([...local,x]);
   }
   function remove(){

   }
    return (
      <div>
        <div className='wishList'>
        <h1> Wish List</h1>
        {local.map((item)=>{
            return(
              <ul  key={item.id} className="card">
              <li>
                <img src={item.image} alt=""/><i onClick={()=>remove()} class="fa-regular fa-heart"></i>
              </li>
              <li>{item.title}</li>
              <li>{item.price}$</li>
              <li>{item.description.slice(1, 50)}...</li>
              <li className="categ">{item.category}</li>
            </ul>
                )})}
        </div>
          
        <div className="products">
          {isloading ? (
            <h1>Loading...</h1>
          ) : (
            api.map((x) => {
              return (
                <ul  key={x.id} className="card">
                  <li>
                    <img src={x.image} alt="" /><i onClick={()=>add(x)} class="fa-regular fa-heart"></i>
                  </li>
                  <li>{x.title}</li>
                  <li>{x.price}$</li>
                  <li>{x.description.slice(1, 50)}...</li>
                  <li className="categ">{x.category}</li>
                </ul>
              );
            })
          )}
        </div>
      </div>
    );
}

export default WishList