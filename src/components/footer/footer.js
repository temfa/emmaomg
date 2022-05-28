import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
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
							<Link to='/about'> About Me</Link>
						</p>
						<p>
							<Link to='/music'>My Music </Link>
						</p>
						<p>
							<Link to='/band'>My Band</Link>
						</p>
						<p>
							<Link to='/brand'>Brand Infuencing</Link>
						</p>
					</div>
					<div>
						<p>
							<Link to='/mc'>MC/Comedian</Link>
						</p>
						<p>
							<Link to='/birthday'>Birthday Shoutouts</Link>
						</p>
						<p>
							<Link to='/online'>Online Contents</Link>
						</p>
						<p>
							<Link to='/family'>My Family</Link>
						</p>
					</div>
				</div>
				{/* <div className='subscribe'>
					<h2>Book your Birthday Shoutouts</h2>
					<input type='text' />
					<button>Subscribe</button>
				</div> */}
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
