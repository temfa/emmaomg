import React from "react";
import "./band.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Band = () => {
	return (
		<>
			<div className='band-container'>
				<Header />
				<div className='band-header'>
					<div>
						<h2>My Band</h2>
						<p>
							I lead an amazing band called "The OhEmGee Band". We host an
							annual show called "Faaji Friday " every December by God's grace.
							See videos and pictures from some of the previous editions below
							We also play at social events, see some videos below.
						</p>
						<button>Make a booking</button>
					</div>
					<div></div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Band;
