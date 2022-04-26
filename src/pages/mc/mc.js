import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./mc.css";
import Image1 from "../../assets/SWA_4005 1.png";
import Image2 from "../../assets/SWA_4153 1.png";
import Image3 from "../../assets/SWA_4190 1.png";
import Image4 from "../../assets/DSC_0158 1.png";

const Mc = () => {
	return (
		<>
			<div className='mc-container'>
				<Header />
				<div className='mc-header'>
					<h2>MC/Comedian</h2>
					<p>
						I anchor corporate and social events and I'm also a stand up
						comedian. See some of my videos below
					</p>
					<div className='mc-img-container'>
						<img src={Image3} alt='images' />
						<img src={Image1} alt='images' />
					</div>
					<div className='mc-img-container'>
						<img src={Image2} alt='images' />
						<img src={Image4} alt='images' />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Mc;
