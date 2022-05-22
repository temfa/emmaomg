import React from "react";
import "./online.css";
import Image1 from "../../assets/unsplash_9vDdkxSCAD4.png";
import Image2 from "../../assets/unsplash_iTc58VLTtEw.png";
import Image3 from "../../assets/unsplash_nLUb9GThIcg.png";
import Image4 from "../../assets/unsplash_wN3q1ANmXJQ.png";
import Layout from "../../utils/layout";
import Emma from "../../assets/emma7.png";

const Online = () => {
	return (
		<Layout>
			<div className='online-header'>
				<div className='online-header-text'>
					<h2>Online Contents</h2>
					<div className='online-details'>
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
				<div className='online-pic'>
					<img src={Emma} alt='Emma' />
				</div>
			</div>
		</Layout>
	);
};

export default Online;
