import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button'
import { Facebook,Google,MailLock,Lock } from "@mui/icons-material";
import CloseIconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./styles.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const logginStatus = false;
  const open = Boolean(anchorEl);
  const openLogin = Boolean(login);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenLoginPopup = (event) => {
    setLogin(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseLogin = () => {
    setLogin(null);
    setAnchorEl(null);
  };

  return (
    <div>
      {logginStatus == false ? (
        <div>
          <div
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="profile-menu-flex"
          >
            <MenuRoundedIcon />
            <AccountCircleRoundedIcon />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".MuiPaper-root": {
                minWidth: "200px",
                borderRadius: "1rem",
                boxShadow:
                  "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
              },
            }}
          >
            <MenuItem className="menu-items" onClick={handleOpenLoginPopup}>
              <b> Sign up </b>
            </MenuItem>
            <MenuItem className="menu-items" onClick={handleOpenLoginPopup}>
              Login
            </MenuItem>

            <div
              style={{
                height: "1px",
                backgroundColor: "var(--grey)",
                width: "100%",
              }}
            />
            <MenuItem onClick={handleClose} className="menu-items">
              Airbnb Your Home
            </MenuItem>
            <MenuItem onClick={handleClose} className="menu-items">
              Host an experience
            </MenuItem>
            <MenuItem onClick={handleClose} className="menu-items">
              Help
            </MenuItem>
          </Menu>
          <Dialog
            PaperProps={{
              sx: {
                width: "100%",
                maxWidth: "720px!important",
              },
            }}
            onClose={handleCloseLogin}
            open={openLogin}  
          >
            <div className="loginHeader">
              <CloseIconButton style={{width:'40px',height:'40px',margin:'7px'}} aria-label="close" onClick={handleCloseLogin}>
              <CloseIcon />
            </CloseIconButton>
            <span style={{textAlign:'center',marginTop:'0.8vw',width:'80vw',color:'#004AAD'}}><b><h3>Login or Sign up</h3></b></span>
            </div>
            <div className='loginBody' style={{display:'flex',flexFlow:'column',alignItems:'center',marginBottom:'7px'}} >
               <h4 style={{color:'#004AAD'}}>Welcome to PWNB continue with</h4>
              <Button variant="outlined" style={{width:'35vw',margin:'1vw'}}><Google/>  <p>Google</p></Button>
              <Button variant="outlined" style={{width:'35vw',margin:'1vw'}}><Facebook/> <p>Facebook</p></Button>
              <Button variant="outlined" style={{width:'35vw',margin:'1vw'}}><MailLock/> <p>By Email</p></Button>
              <Button variant="outlined" style={{width:'35vw',margin:'1vw'}}><Lock/> <p>Anonymouse</p></Button>
            </div>
          </Dialog>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
