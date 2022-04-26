import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./online.css";
import Image1 from "../../assets/unsplash_9vDdkxSCAD4.png";
import Image2 from "../../assets/unsplash_iTc58VLTtEw.png";
import Image3 from "../../assets/unsplash_nLUb9GThIcg.png";
import Image4 from "../../assets/unsplash_wN3q1ANmXJQ.png";

const Online = () => {
	return (
		<>
			<div className='online-container'>
				<Header />
				<div className='online-header'>
					<h2>Online Contents</h2>
					<p>Sit back, relax and enjoy content from my comedy channel</p>
					<div className='online-img-container'>
						<img src={Image1} alt='images' />
						<img src={Image3} alt='images' />
					</div>
					<div className='online-img-container'>
						<img src={Image4} alt='images' />
						<img src={Image2} alt='images' />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Online;
