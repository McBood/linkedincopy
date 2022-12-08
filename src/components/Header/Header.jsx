import React from "react";

import "./header.scss";
import SearchIcon from "@material-ui/icons/Search";
import LinkedIn from "../../assets/img/linkedin.svg";
import HeaderOption from "../HeaderOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedIn} alt="linkedin" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaning" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutApp} />
      </div>
    </div>
  );
};

export default Header;
