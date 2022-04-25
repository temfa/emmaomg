import React, { useState } from "react";
import "./dropdown.css";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<div className={dropdown? 'dropdown-menu clicked' : 'dropdown-menu '} onClick={() => setDropdown(!dropdown)}>
			<NavLink to=''  activeClassName='is-active'>
				My Band
			</NavLink>
			<NavLink to='/brand' activeClassName='is-active'>
				Brand Infuencing
			</NavLink>
			<NavLink to='/mc' activeClassName='is-active'>
				Mc/Comedian
			</NavLink>
			<NavLink to='/online' activeClassName='is-active'>
				Online Content
			</NavLink>
			<NavLink to='/family' activeClassName='is-active'>
				My Family
			</NavLink>
		</div>
	);
};

export default Dropdown;
