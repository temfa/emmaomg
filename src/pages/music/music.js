import React from "react";
import "./music.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Apple from "../../assets/apple.png";
import Audiomack from "../../assets/audiomack.png";
import Boomplay from "../../assets/boomplay.png";
import Itunes from "../../assets/itunes.png";

const Music = () => {
	return (
		<>
			<div className='music-container'>
				<Header />
				<div className='music-header'>
					<h2>My Music</h2>
					<p>
						I have a number of singles and albums available on all online music
						stores. Click below to follow me and listen to my songs on your
						preferred platform (you can also search for EmmaOMG on your
						preferred platform in case you don't find it below)
					</p>
					<img src={Apple} alt='Apple' />
					<div className='music'>
						<div>
							<img src={Boomplay} alt='Music' />
						</div>
						<div>
							<img src={Audiomack} alt='Music' />
						</div>
						<div>
							<img src={Itunes} alt='Music' />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Music;
