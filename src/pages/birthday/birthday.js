import React from "react";
import "./birthday.css";
import Shoutout from "../../components/shoutout/shoutout";
import Layout from "../../utils/layout";
import Emma from "../../assets/emma7.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

AOS.init();

const Birthday = () => {
	return (
		<Layout>
			<div className='birthday-header'>
				<div className='birthday-header-body'>
					<h2>Birthday Shoutouts</h2>
					<div className='shoutout-details'>
						<div className='shoutout-body'>
							<Shoutout
								text='EmmaOMG sings a special birthday song for the celebrant in acapella
							harmonies without any produced beat. Duration 2mins'
								title='THE ACAPELLA OPTION'
								direction='slide-right'
								acapella='acapella'
							/>
							<Shoutout
								text='EmmaOMG singing in the studio to a song produced for the celebrant. Duration 2mins'
								title='THE STUDIO  OPTION'
								direction='slide-right'
								sampleLink='https://youtu.be/_7zkGZFYlyc'
							/>
						</div>
						<div className='shoutout-body'>
							<Shoutout
								text="An upgrade to the studio package where the video is shot on chroma so it blends more with the celebrant's background pictures. Duration 2mins"
								title='THE STUDIO PLUS OPTION'
								direction='slide-left'
								sampleLink='https://youtu.be/zJUCAr805zk'
							/>
							<Shoutout
								text='EmmaOMG replicates himself to form different members of a Live Band that displays a Virtual Party. Duration 4mins'
								title='THE ONE MAN BAND OPTION'
								direction='slide-left'
								sampleLink='https://youtu.be/0KXSGprDObI'
							/>
						</div>
						<div className='shoutout-body'>
							<Shoutout
								text='EmmaOMG replicates himself to form different members of a Live Band that displays a Virtual Party. Duration 7mins'
								title='THE ONE MAN BAND OPTION (PREMIUM)'
								direction='slide-right'
								sampleLink='https://youtu.be/z_l0mc4dGx4'
							/>
							<Shoutout
								text='The OhEmGee Band performs a customised Faaji special for the celebrant. Duration 15mins.'
								title='THE OHEMGEE BAND FAAJI OPTION'
								direction='slide-left'
								sampleLink='https://youtu.be/bDCNCx9GFFQ'
							/>
						</div>
					</div>
					<div className='birthday-buttons'>
						<NavLink to='/contact'>Make a Booking</NavLink>
						<a href='mailto:ohemgeeltd@gmail.com?subject=Request For Rates Card&body=Hi Emma, I want to request for your Rates Card'>
							Request for Rates Card
						</a>
					</div>
				</div>
				<div className='birthday-pic'>
					<img src={Emma} alt='Emma' />
				</div>
			</div>
		</Layout>
	);
};

export default Birthday;
