import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
// import Dropdown from "../dropdown/dropdown";

const Header = () => {
	// const [dropdown, showDropdown] = useState(false);
	return (
		<nav className='header-container'>
			<div className='logo-container'>
				<img src={Logo} alt='Logo' />
			</div>
			<div className='nav-links'>
				<div>
					<NavLink to='/' activeClassName='is-active'>
						Home
					</NavLink>
					<NavLink to='/about' activeClassName='is-active'>
						About
					</NavLink>
					<NavLink to='/music' activeClassName='is-active'>
						Music
					</NavLink>
					<NavLink to='/shoutout' activeClassName='is-active'>
						Shoutout
					</NavLink>
					<NavLink to='/more' activeClassName='is-active'>
						More
					</NavLink>
					<NavLink to='/contact' activeClassName='is-active'>
						Contact
					</NavLink>
				</div>
				<div className='header-button'>
					<button>Make a Booking</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
