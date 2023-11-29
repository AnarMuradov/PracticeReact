import React, { useEffect, useState } from "react";
import "./index.css";
const Customisotop = () => {
  const [api, setApi] = useState([]);
  const [category, setCategory] = useState("All");
  const [isloading, setIsloading] = useState(true);
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

  function handleCategory(category) {
    setCategory(category);
  }
  const filterPrdoucts =
    category === "All" ? api : api.filter((item) => item.category === category);

  return (
    <div>
      <div className="filter">
        <ul className="items">
          <li onClick={() => handleCategory("All")}>All</li>
          <li onClick={() => handleCategory("men's clothing")}>Men</li>
          <li onClick={() => handleCategory("jewelery")}>Jewelery</li>
          <li onClick={() => handleCategory("electronics")}>Electronics</li>
          <li onClick={() => handleCategory("women's clothing")}>Women</li>
        </ul>
      </div>
      <div className="products">
        {isloading ? (
          <h1>Loading...</h1>
        ) : (
          filterPrdoucts.map((x) => {
            return (
              <ul  key={x.id} className="card">
                <li>
                  <img src={x.image} alt="" />
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
};

export default Customisotop;
// function handleCategory(category) {
//     setCategory(category);
//   }
//   const filterPrdoucts =
//     category === "All"
//       ? api
//       : api.filter((item) => item.category === category);
