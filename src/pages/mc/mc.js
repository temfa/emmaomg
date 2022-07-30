import React from "react";
import "./mc.css";
import Emma6 from "../../assets/emma6.png";
import LayoutHome from "../../utils/layoutHome";
import { NavLink } from "react-router-dom";
// import Iframe from "../../components/iframe/iframe";

const Mc = () => {
	return (
		<LayoutHome>
			<div className='mc-header'>
				<div className='mc-header-text'>
					<h2>MC/Comedian</h2>
					<div className='mc-details'>
						<p>
							I anchor corporate and social events and I'm also a stand up
							comedian.
							{/* See some of my videos below */}
						</p>
						<NavLink to='/contact'>Make a Booking</NavLink>
						{/* <div className='mc-img-container'>
							<Iframe
								link='https://www.youtube.com/watch?v=vL57lduj3FQ&list=PLuqpSguKyI0cKgZYJmhoMuLrAqqqHG3UK&index=1'
								title="EmmaOMG Live at Bisimanuel's concert 2019 #EmmaOMGStandupComedy"
								iframe='https://www.youtube.com/embed/vL57lduj3FQ?list=PLuqpSguKyI0cKgZYJmhoMuLrAqqqHG3UK'
							/>
						</div> */}
					</div>
				</div>
				<div className='mc-img'>
					<img src={Emma6} alt='Emma' />
				</div>
			</div>
		</LayoutHome>
	);
};

export default Mc;
