import React from "react";
import "./styles.css";

function MobileSearchBar() {
  return <div className="mobile-search-bar">
       <input id="search" type="text" name="search" placeholder="search products and services"/>
       <span className="mobile-search-icon-div">
       <i className="fa-solid fa-magnifying-glass" style={{color:"#ffffff"}}></i>
        </span>
      </div>;
}

export default MobileSearchBar;
