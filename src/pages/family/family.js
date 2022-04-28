import React from "react";
import "./family.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Image1 from "../../assets/unsplash_9vDdkxSCAD4.png";
import Image3 from "../../assets/unsplash_nLUb9GThIcg.png";
import FamilyPic from "../../assets/family.png";
import Headertest from "../../components/header/headertest";

const Family = () => {
	return (
		<>
			<div className='family-container'>
				<Headertest />
			</div>
			<div className='family-test'>
				<div className='family-header'>
					<div className='family-header-text'>
						<h2>My Family</h2>
						<p>Subscribe to my family youtube channel </p>
						<div className='family-img-container'>
							<img src={Image1} alt='images' />
							<img src={Image3} alt='images' />
						</div>
					</div>
					<div className='family-image'>
						<img src={FamilyPic} alt='Family' />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Family;
