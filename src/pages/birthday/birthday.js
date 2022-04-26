import React from "react";
import "./birthday.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Shoutout from "../../components/shoutout/shoutout";

const Birthday = () => {
	return (
		<>
			<div className='birthday-container'>
				<Header />
				<div className='birthday-header'>
					<h2>Birthday Shoutouts</h2>
					<div className='shoutout-body'>
						<Shoutout
							text='EmmaOMG sings a special birthday song for the celebrant in acapella
							harmonies without any produced beat. Duration 2mins'
							title='THE ACAPELLA OPTION'
						/>
						<Shoutout
							text="An upgrade to the studio package where the video is shot on camera so it blends more with the celebrant's background pictures. Duration 2mins"
							title='THE STUDIO PLUS OPTION'
						/>
					</div>
					<div className='shoutout-body'>
						<Shoutout
							text='EmmaOMG singing in the studio to a song produced for the celebrant. Duration 2mins'
							title='THE STUDIO  OPTION'
						/>
						<Shoutout
							text='EmmaOMG replicates himself to form different members of a Live Band that displays a Virtual Party. Duration 4mins'
							title='THE ONE MAN BAND OPTION'
						/>
					</div>
					<div className='shoutout-body'>
						<Shoutout
							text='EmmaOMG replicates himself to form different members of a Live Band that displays a Virtual Party. Duration 7mins'
							title='THE ONE MAN BAND OPTION (PREMIUM)'
						/>
						<Shoutout
							text='The OhEmGee Band performs a customised Faaji special for the celebrant. Duration 15mins.'
							title='THE OHEMGEE BAND FAAJI OPTION'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Birthday;
