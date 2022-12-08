import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

import "./lSidebar.scss";

const LSidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="lSidebar__recentItem">
      <span className="lSidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="lSidebar">
      <div className="lSidebar__top">
        <img src="https://wallpaperaccess.com/full/340434.png" alt="bckg" />
        <Avatar src={user.photoUrl} className="lSidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="lSidebar__stats">
        <div className="lSidebar__stat">
          <p>Wiews:</p>
          <p className="lSidebar__stat -number">2,593</p>
        </div>
        <div className="lSidebar__stat">
          <p>Post wiews:</p>
          <p className="lSidebar__stat -number">2,301</p>
        </div>
      </div>
      <div className="lSidebar__bot">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("developer")}
        {recentItem("design")}
      </div>
    </div>
  );
};

export default LSidebar;
