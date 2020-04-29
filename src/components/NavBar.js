import React from "react";

const NavBar = () => {
  return (
    <div id="left" className="column">
      <div className="top-left">Menu</div>
      <div className="bottom">
        <ul>
          <li className="nav-list-item">Some random</li>
          <li className="nav-list-item">Stuff that</li>
          <li className="nav-list-item">does not need</li>
          <li className="nav-list-item">to be filled</li>
          <li className="nav-list-item">at this point</li>
          <li className="nav-list-item">but is here to</li>
          <li className="nav-list-item">take up space</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
