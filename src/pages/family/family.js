import React from "react";
import "./family.css";
import Image1 from "../../assets/unsplash_9vDdkxSCAD4.png";
import Image3 from "../../assets/unsplash_nLUb9GThIcg.png";
import FamilyPic from "../../assets/family.png";
import Layout from "../../utils/layout";

const Family = () => {
	return (
		<Layout>
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
		</Layout>
	);
};

export default Family;
