import * as React from "react";
import {links} from "./images-links"
import MobileSearchBar from '../MobileSearchBar'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import "./styles.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottom-nav">
      <MobileSearchBar/>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       {links.map((item, i) => ( 
        <BottomNavigationAction key={i} label={item.label} icon={ <img src={item.imgSrc} className="links-img" />} />
        ))}
      </BottomNavigation>
    </div>
  );
}
