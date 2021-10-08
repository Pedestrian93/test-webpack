import React from "react";
import ReactDom from "react-dom";
import logo from "./images/bilibili.png";
import "./index.less";

function A() {
  const onClick = () => {
    console.log('11')
  }
  return (
    <div>
      cccxsss
      <button onClick ={onClick}>jjjj</button>
      <h1 className="a"c>ssjjj</h1>
      <img src={logo}></img>
    </div>
  );
}

ReactDom.render(<A />, document.getElementById("root"));
