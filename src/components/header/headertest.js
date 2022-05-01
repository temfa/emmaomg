import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import Dropdown from "../dropdown/dropdown";

const Headertest = () => {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth > 1500) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth > 1500) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	return (
		<>
			<nav className='navbar'>
				<NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
					<img src={Logo} alt='Logo' />
				</NavLink>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<div className='header-container'>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className='nav-item'>
							<NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/about'
								className='nav-links'
								onClick={closeMobileMenu}>
								About
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/music'
								className='nav-links'
								onClick={closeMobileMenu}>
								Music
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/birthday'
								className='nav-links'
								onClick={closeMobileMenu}>
								Shoutout
							</NavLink>
						</li>
						<li
							className='nav-item nav-items'
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}>
							<NavLink to='#' className='nav-links'>
								More <i className='fas fa-caret-down' />
							</NavLink>
							{dropdown && <Dropdown />}
						</li>
						<li className='nav-item'>
							<NavLink
								to='/contact'
								className='nav-links'
								onClick={closeMobileMenu}>
								Contact
							</NavLink>
						</li>
						{/* <li>
						<NavLink
							to='/sign-up'
							className='nav-links-mobile'
							onClick={closeMobileMenu}>
							Sign Up
						</NavLink>
					</li> */}
						<div className='header-buttons '>
							<button className='nav-links-mobile'>
								<NavLink to='/contact' onClick={closeMobileMenu}>
									Make a Booking
								</NavLink>
							</button>
						</div>
					</ul>
					<div className='header-button '>
						<button className='nav-links'>
							<NavLink to='/contact' onClick={closeMobileMenu}>
								Make a Booking
							</NavLink>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Headertest;
