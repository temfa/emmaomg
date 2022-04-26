import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./brand.css";
import Brand1 from "../../assets/image 4.png";
import Brand2 from "../../assets/image 5.png";
import Emma from "../../assets/emma1.png";

const Brand = () => {
	return (
		<>
			<div className='brand-container'>
				<Header />
				<div className='brand-header'>
					<div>
						<h2>Brand Influencing</h2>
						<p>
							I create contents and also help to influence for brands. Request
							for my rates card and also view previous projects, below are some
							of the brands I've worked with so far.
						</p>
						<div className='brand-design'>
							<img src={Brand1} alt='Brand 1' />
							<img src={Brand2} alt='Brand 2' />
						</div>
						<button>Recent Projects</button>
					</div>
					<div>
						<img src={Emma} alt='Emma' />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Brand;
