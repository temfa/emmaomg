import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import Image1 from "../../assets/image 1.png";
import BlackTransparecy from "../../assets/black-transparency.png";
import GrayTransparecy from "../../assets/gray-transparency.png";

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-header'>
				<img src={BlackTransparecy} alt='Rectangle' className='rectangle' />
				<img src={GrayTransparecy} alt='Rectangle' className='rectangle' />
				<img src={Logo} alt='Logo' />

				<div className='about-footer'>
					<div>
						<p className='footer-heading'>
							<NavLink to='/about'> About Me</NavLink>
						</p>
						<p>
							<NavLink to='/music'>My Music </NavLink>
						</p>
						<p>
							<NavLink to='/band'>My Band</NavLink>
						</p>
						<p>
							<NavLink to='/brand'>Brand Infuencing</NavLink>
						</p>
					</div>
					<div>
						<p>
							<NavLink to='/mc'>MC/Comedian</NavLink>
						</p>
						<p>
							<NavLink to='/birthday'>Birthday Shoutouts</NavLink>
						</p>
						<p>
							<NavLink to='/online'>Online Contents</NavLink>
						</p>
					</div>
				</div>
				<div className='subscribe'>
					<h2>Book your Birthday Shoutouts</h2>
					<input type='text' />
					<button>Subscribe</button>
				</div>
			</div>
			<div className='landing-designs'>
				<img src={Image1} alt='image1' />
				<img src={Image1} alt='image2' />
				<img src={Image1} alt='image3' />
				<img src={Image1} alt='image4' />
				<div></div>
			</div>
			<div className='footer-copyright'>
				<p>Copyright © 2022. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
