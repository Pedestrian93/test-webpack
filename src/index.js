import React from "react";
import ReactDom from "react-dom";
import logo from "./images/bilibili.png";
import "./index.less";

function A() {
  return (
    <div>
      cccxsss
      <h1 className="a">ssjjj</h1>
      <img src={logo}></img>
    </div>
  );
}

ReactDom.render(<A />, document.getElementById("root"));
