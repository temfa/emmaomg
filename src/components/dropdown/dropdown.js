import React, { useState } from "react";
import "./dropdown.css";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className={dropdown ? "dropdown-menu clicked" : "dropdown-menu "} onClick={() => setDropdown(!dropdown)}>
      <NavLink to="/theohEmGeeband" activeclassname="is-active">
        The OhEmGee Band
      </NavLink>
      <NavLink to="/brand" activeclassname="is-active">
        Brand Infuencing
      </NavLink>
      <NavLink to="/mc" activeclassname="is-active">
        Mc/Comedian
      </NavLink>
      <NavLink to="/online" activeclassname="is-active">
        OhEmGee Comedy
      </NavLink>
      <NavLink to="/family" activeclassname="is-active">
        My Family
      </NavLink>
    </div>
  );
};

export default Dropdown;
