import React, { useState } from "react";
import { links } from "../../assets/images-links";
import "./styles.css";

function Filter({ selectedFilter, setSelectedFilter }) {
  return (
   <center>
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i == selectedFilter && "selected-box"}`}
          onClick={() => {
            setSelectedFilter(i);
          }}
        >
          <img src={item.imgSrc} className="links-img" />
          <p
            className={`links-label ${i == selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
    </center> 
  );
}

export default Filter;
