import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";

function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-input"><div><input id="search" type="text" name="search" placeholder="   search products and services"/></div></div>
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
