import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <Avatar src={user.phtoURL} className="sidebar__avatar" >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,589</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,589</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("softwareengineering")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
