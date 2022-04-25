import React from "react";
import Header from "../../components/header/header";
import "./landing.css";
import Arrow from "../../assets/Vector(1).png";
import Image1 from "../../assets/image 1.png";
import Image2 from "../../assets/image 2.png";
import Image3 from "../../assets/image 3.png";
import Brand1 from "../../assets/image 4.png";
import Brand2 from "../../assets/image 5.png";
import Footer from "../../components/footer/footer";

const Landing = () => {
	return (
		<div>
			<div className='landing-container'>
				<Header />
				<div className='landing-body'>
					<h2>
						<span className='span1'>
							Welcome <br />
						</span>{" "}
						<span className='span2'>
							to my page,
							<br />{" "}
						</span>{" "}
						click here to start the journey
					</h2>
					<div className='landing-arrow'>
						<img src={Arrow} alt='Arrow' />
					</div>
				</div>
			</div>
			<div className='landing-design'>
				<img src={Image1} alt='image1' />
				<img src={Image2} alt='image1' />
				<img src={Image3} alt='image1' />
				<div></div>
			</div>
			<div className='landing-about'>
				<div>
					<div></div>
					<div>
						<h2 className='landing-heading'>About Me</h2>
						<h2>My Music</h2>
						<h2>My Band</h2>
						<h2>Brand Infuencing</h2>
						<h2>MC/Comedian</h2>
						<h2>Birthday Shoutouts</h2>
						<h2>Online Contents</h2>
						<h2>My Family</h2>
						<div className='landing-about-arrow'>
							<img src={Arrow} alt='Arrow' />
						</div>
					</div>
				</div>
				<div className='landing-design'>
					<img src={Brand1} alt='Brand 1' />
					<img src={Brand2} alt='Brand 2' />
					<div></div>
				</div>
				<div className='video-week'>
					<div>
						<h2>Video of the Week</h2>
						<button>Play</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Landing;
