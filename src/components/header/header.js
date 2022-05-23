import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	let navigate = useNavigate();
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const handleLogout = () => {
		sessionStorage.removeItem("Auth Token");
		navigate("/emma");
	};

	return (
		<>
			<nav className='navbar'>
				<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
					<img src={Logo} alt='Logo' />
				</Link>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<div className='header-container'>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/emmaadmin'
								className='nav-links'
								onClick={closeMobileMenu}>
								Faaji Friday
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/ticket'
								className='nav-links'
								onClick={closeMobileMenu}>
								Ticket Details
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/video' className='nav-links' onClick={closeMobileMenu}>
								Video
							</Link>
						</li>
						<div className='header-buttons '>
							<button className='nav-links-mobile'>Logout</button>
						</div>
					</ul>
					<div className='header-button '>
						<button className='nav-links' onClick={handleLogout}>
							Logout
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
