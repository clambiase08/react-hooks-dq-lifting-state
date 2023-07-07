import React, { useState } from "react";
import Menu from "./Menu";

function Header({onToggleMode, mode}) {
  

  return (
    <div className={`ui fixed menu ${mode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
      <Menu onToggleMode={onToggleMode} mode={mode}/>
      </div>
    </div>
  );
}

export default Header;
