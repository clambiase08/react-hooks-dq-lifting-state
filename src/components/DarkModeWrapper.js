import React from "react";

function DarkModeWrapper({mode, children}) {
  return (
    <div id="wrapper" className={mode ? "dark-mode" : ""}>
      {children}
    </div>
  );
}

export default DarkModeWrapper;
