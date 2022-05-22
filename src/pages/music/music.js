import React from "react";
import "./music.css";
import Apple from "../../assets/apple.png";
import Audiomack from "../../assets/audiomack.png";
import Boomplay from "../../assets/boomplay.png";
import Itunes from "../../assets/itunes.png";
import Emma4 from "../../assets/emma4.png";
import Layout from "../../utils/layout";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Music = () => {
	return (
		<Layout>
			<div className='music-header'>
				<div className='music-header-text'>
					<h2>My Music</h2>
					<div className='music-details'>
						<p
							data-aos='slide-left'
							data-aos-duration='2000'
							data-aos-once='true'>
							I have a number of singles and albums available on all online
							music stores. Click below to follow me and listen to my songs on
							your preferred platform (you can also search for EmmaOMG on your
							preferred platform in case you don't find it below)
						</p>
						<img
							src={Apple}
							alt='Apple'
							className='apple'
							data-aos='slide-right'
							data-aos-duration='2000'
							data-aos-once='true'
						/>
						<div className='music'>
							<div
								data-aos='slide-left'
								data-aos-duration='2000'
								data-aos-once='true'>
								<img src={Boomplay} alt='Music' />
							</div>
							<div
								data-aos='slide-right'
								data-aos-duration='2000'
								data-aos-once='true'>
								<img src={Audiomack} alt='Music' />
							</div>
							<div
								data-aos='slide-left'
								data-aos-duration='2000'
								data-aos-once='true'>
								<img src={Itunes} alt='Music' />
							</div>
						</div>
					</div>
				</div>
				<div className='music-emma'>
					<img src={Emma4} alt='Emma' />
				</div>
			</div>
		</Layout>
	);
};

export default Music;
