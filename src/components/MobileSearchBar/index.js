import React from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function MobileSearchBar() {
  return <div className="mobile-search-bar">
        <div className="mobile-search-bar-input"><div><input id="search" type="text" name="search" placeholder="   search products and services"/></div></div>
       <div className="mobile-search-icon-div">
         <center><SearchRoundedIcon className="mobile-search-icon" /></center> 
        </div>
      </div>;
}

export default MobileSearchBar;
