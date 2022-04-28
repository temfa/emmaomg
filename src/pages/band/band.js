import React from "react";
import "./band.css";
// import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Emma5 from "../../assets/emma5.png";
import Rectangle1 from "../../assets/Rectangle 32.png";
import Rectangle2 from "../../assets/Rectangle 33.png";
import Headertest from "../../components/header/headertest";

const Band = () => {
	return (
		<>
			<div className='band-container'>
				<Headertest />
				<div className='band-header'>
					<div className='band-header-text'>
						<h2>My Band</h2>
						<p>
							I lead an amazing band called "The OhEmGee Band". We host an
							annual show called "Faaji Friday " every December by God's grace.
							See videos and pictures from some of the previous editions below
							We also play at social events, see some videos below.
						</p>
						<button>Make a booking</button>
					</div>
					<div className='band-emma'>
						<img src={Emma5} alt='emma' className='first-emma' />
						<div>
							<div>
								<img src={Rectangle1} alt='Rectangle' className='band-img' />
							</div>
							<div>
								<img src={Rectangle2} alt='Rectangle' className='band-img' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Band;
