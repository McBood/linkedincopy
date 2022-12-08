import React from "react";

import "./headerOption.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { Avatar } from "@material-ui/core";

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
