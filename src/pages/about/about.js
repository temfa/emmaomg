import React from "react";
import Header from "../../components/header/header";
import "./about.css";
import Twitter from "../../assets/twitter.png";
import Whatsapp from "../../assets/whatsapp.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Footer from "../../components/footer/footer";

const About = () => {
	return (
		<>
			<div className='about-container'>
				<Header />
				<div className='about-header'>
					<h2>
						Emmanuel Edunjobi <span>aka</span> EmmaOMG
					</h2>
					<div className='about-details'>
						<p>
							Emmanuel Edunjobi, popularly known by his stage name, EmmaOMG, is
							a multi-talented entertainer whose repertoire includes comedy,
							acting, music (vocals and instrumentals) and content creation.
						</p>
						<p>
							Emmanuel’s romance with entertainment started at the age of 8 when
							he joined his church choir as an instrumentalist. His dexterity
							with the guitar, piano and drums was borne out of interest as he
							is largely self taught.
						</p>
						<p>
							Despite his skills in the other forms of entertainment he often
							refers to music as his first love as evidenced by his weekly
							Yoruba gospel praise medleys on Instagram and YouTube and his
							parodies of hit songs.
						</p>
						<p>
							In 2019, he formed “The Ohemgee Band”, a band comprising seasoned
							instrumentalists and singers. Their musical expression is mainly
							praise and worship in a well seasoned traditional contemporary
							style. They  have performed at exclusive and private events in
							Lagos.
						</p>
						<p>
							Also since 2019, Emmanuel has hosted an annual show with his band
							titled “Faaji Friday” – a rapidly growing variety and music show
							that showcases every December.
						</p>
						<p>
							He is also a well sought after influencer and content creator for
							brands. He particularly specializes in creating viral signature
							tunes for brands and he has worked with some top brands EmmaOMG is
							happily married to a loving wife and blessed with a beautiful
							daughter.
						</p>
						<div className='socials'>
							<img src={Whatsapp} alt='Social Icons' />
							<img src={Facebook} alt='Social Icons' />
							<img src={Instagram} alt='Social Icons' />
							<img src={Twitter} alt='Social Icons' />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
