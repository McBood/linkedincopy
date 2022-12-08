import React from "react";

import "./widgets.scss";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__article -left">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__article -right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>;
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("this is a test news", "9000 wiews")}
      {newsArticle("this is a test news", "9000 wiews")}
      {newsArticle("this is a test news", "9000 wiews")}
    </div>
  );
};

export default Widgets;
