import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOptions from "./HeaderOptions";
// import me from "./images/DIK.jpg";
import {useDispatch} from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  // const user= useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutToApp=()=>{
      dispatch(logout());
      auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right"></div>
      <HeaderOptions Icon={HomeIcon} title="Home" />
      <HeaderOptions Icon={SupervisorAccountIcon} title="My Network " />
      <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOptions Icon={ChatIcon} title="Messaging" />
      <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
      <HeaderOptions avatar={true} title="me" onClick={logoutToApp}/>
    </div>
  );
}

export default Header;
