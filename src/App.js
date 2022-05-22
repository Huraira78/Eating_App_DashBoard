import React, { useState } from "react";
import "./eating_app.css";
import { data } from "./data.js";

const Eating_app = () => {
  const [first, setfirst] = useState(data);
  const filterItem = (currCatagory) => {
    const khana = data.filter((elem) => {
      return elem.catagory === currCatagory;
    });
    setfirst(khana);
  };
  const filterSearch=(e)=>{
    const SearchFilter=data.filter(elem=>
      elem.catagory.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setfirst(SearchFilter)
  }
  return (
    <div>
      <div className="header">
        <h1>Eating Menu Dashoard</h1>
      </div>
      <div className="btns">
        <a href="#">
          <button onClick={() => filterItem("breakfast")}>Breakfast</button>
        </a>
        <a href="#">
          <button onClick={() => filterItem("Lunch")}>Lunch</button>
        </a>
        <a href="#">
          <button onClick={() => filterItem("Dinner")}>Dinner</button>
        </a>
        <a href="#">
          <button onClick={() => setfirst(data)}>All</button>
        </a>
      </div>
      <div className="input">
        <input type="text" className="search" placeholder="Search..."  onChange={(e)=>filterSearch(e)}/>
      </div>
      <div className="mappingData">
        {first.map((elem) => {
          const { id, name, price, catagory, ImageUrl } = elem;
          return (
            <div className="main">
              <div className="items" key={id}>
                <div className="image">
                  <img src={ImageUrl} alt={name} />
                </div>
                <div className="credentials">
                  <h1>{name}</h1>
                  <h2>{catagory}</h2>
                  <h3>{price}</h3>
                </div>
              </div>
             </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eating_app;
