import React from "react";
import "./band.css";
import Emma5 from "../../assets/emma5.png";
import Rectangle1 from "../../assets/Rectangle 32.png";
import Rectangle2 from "../../assets/Rectangle 33.png";
import AOS from "aos";
import "aos/dist/aos.css";
import LayoutHome from "../../utils/layoutHome";
import { NavLink } from "react-router-dom";
AOS.init();

const Band = () => {
	window.onbeforeunload = (e) => {
		window.scrollTo(0, 0);
	};
	return (
		<LayoutHome>
			<div className='band-header'>
				<div className='band-header-text'>
					<h2>My Band</h2>
					<p>
						I lead an amazing band called "The OhEmGee Band". We host an annual
						show called "Faaji Friday " every December by God's grace. See
						videos and pictures from some of the previous editions below.
					</p>
					<p>We also play at social events, see some videos below.</p>
					<NavLink to='/contact'>Make a Booking</NavLink>
				</div>
				<div className='band-emma'>
					<img
						src={Emma5}
						alt='emma'
						className='first-emma'
						data-aos='fade-top'
						data-aos-duration='2000'
					/>
					<div>
						<div>
							<img
								src={Rectangle1}
								alt='Rectangle'
								className='band-img'
								data-aos='fade-right'
								data-aos-duration='2000'
								data-aos-once='true'
							/>
						</div>
						<div>
							<img
								src={Rectangle2}
								alt='Rectangle'
								className='band-img'
								data-aos='fade-left'
								data-aos-duration='2000'
								data-aos-once='true'
							/>
						</div>
					</div>
				</div>
			</div>
		</LayoutHome>
	);
};

export default Band;
