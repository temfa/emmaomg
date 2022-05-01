import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import Image1 from "../../assets/image 1.png";
import Image2 from "../../assets/image 2.png";
import Image3 from "../../assets/image 3.png";
import Rectangle from "../../assets/Rectangle 20.png";

const Footer = () => {
	return (
		<div>
			<div className='footer-header'>
				<img src={Rectangle} alt='Rectangle' className='rectangle' />
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
				<img src={Image2} alt='image1' />
				<img src={Image3} alt='image1' />
				<div></div>
			</div>
			<div className='footer-copyright'>
				<p>Copyright © 2022. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
