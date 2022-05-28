import React, { useEffect } from "react";
import "./landing.css";
import Arrow from "../../assets/Vector(1).png";
import Image1 from "../../assets/image 1.png";
import Image2 from "../../assets/image 2.png";
import Image3 from "../../assets/image 3.png";
import Brand1 from "../../assets/image 4.png";
import Brand2 from "../../assets/image 5.png";
import { NavLink } from "react-router-dom";
import Emma from "../../assets/emma1.png";
import Emma2 from "../../assets/emma2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import LayoutHome from "../../utils/layoutHome";
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";

AOS.init();

const Landing = () => {
	useEffect(() => {
		let play = document.getElementById("play");
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				play.innerHTML = `
						<a href=${Object.values(data)[1].youtubeLink} target="_blank">Play</a>
					`;
			}
		});
	}, []);
	return (
		<LayoutHome>
			<div className='landing-body'>
				<div className='landing-body-text'>
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
						<a href='#about'>
							<img src={Arrow} alt='Arrow' />
						</a>
					</div>
				</div>
				<div className='emma-body'>
					<img src={Emma} alt='emma' />
					<div className='introduction'>
						<p className='introduction-quote'>“</p>
						<p className='introduction-text'>
							Hi, I am Emmanuel Edunjobi aka EmmaOMG
						</p>
					</div>
				</div>
			</div>
			<div className='landing-design1'>
				<img src={Image1} alt='image1' />
				<img src={Image2} alt='image1' />
				<img src={Image3} alt='image1' />
				<div></div>
			</div>
			<div className='landing-about' id='about'>
				<div className='landing-about-body'>
					<div className='landing-about-img'>
						<img src={Emma2} alt='emma' />
					</div>
					<div className='landing-about-links'>
						<h2
							className='landing-heading'
							data-aos='fade-right'
							data-aos-duration='2000'
							data-aos-once='true'>
							<NavLink to='/about'> About Me</NavLink>
						</h2>
						<h2
							data-aos='fade-left'
							data-aos-duration='2000'
							data-aos-once='true'>
							<NavLink to='/music'>My Music </NavLink>
						</h2>
						<h2
							data-aos='fade-right'
							data-aos-duration='2000'
							data-aos-once='true'>
							<NavLink to='/band'>My Band</NavLink>
						</h2>
						<h2
							data-aos='fade-left'
							data-aos-duration='2000'
							data-aos-once='true'>
							<NavLink to='/brand'>Brand Infuencing</NavLink>
						</h2>
						<h2
							data-aos='fade-right'
							data-aos-duration='2000'
							data-aos-once='true'>
							<NavLink to='/mc'>MC/Comedian</NavLink>
						</h2>
						<h2
							data-aos='fade-left'
							data-aos-duration='2000'
							data-aos-once='true'>
							<NavLink to='/birthday'>Birthday Shoutouts</NavLink>
						</h2>
						<h2
							data-aos='fade-right'
							data-aos-duration='2000'
							data-aos-once='true'>
							<NavLink to='/online'>Online Contents</NavLink>
						</h2>
						<h2
							data-aos='fade-left'
							data-aos-duration='2000'
							data-aos-once='true'>
							<NavLink to='/family'>My Family</NavLink>
						</h2>
						<div className='landing-about-arrow'>
							<a href='#video-week'>
								<img src={Arrow} alt='Arrow' />
							</a>
						</div>
					</div>
				</div>
				<div className='landing-design'>
					<img src={Brand1} alt='Brand 1' />
					<img src={Brand2} alt='Brand 2' />
					<div></div>
				</div>
				<div className='video-week' id='video-week'>
					<div>
						<h2
							data-aos='fade-right'
							data-aos-duration='2000'
							data-aos-once='true'>
							Video of the Week
						</h2>
						<button id='play'></button>
					</div>
				</div>
			</div>
		</LayoutHome>
	);
};

export default Landing;
