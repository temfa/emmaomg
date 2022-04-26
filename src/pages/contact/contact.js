import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./contact.css";
import Mail from "../../assets/mail.png";
import Youtube from "../../assets/Youtube.png";
import Twitter from "../../assets/twitter1.png";
import Facebook from "../../assets/facebook1.png";
import Instagram from "../../assets/instagram.png";

const Contact = () => {
	return (
		<>
			<div className='contact-container'>
				<Header />
				<div className='contact-header'>
					<div>
						<h2>Contact us</h2>
						<div className='mail-div'>
							<img src={Mail} alt='mail' />
							<p>ohemgeeltd@gmail.com</p>
						</div>
						<div className='mail-div'>
							<img src={Mail} alt='mail' />
							<p>theohemgeeband@gmail.com</p>
						</div>
						<div className='social-contact'>
							<div>
								<img src={Youtube} alt='mail' />
							</div>
							<div>
								<img src={Instagram} alt='mail' />
							</div>
							<div>
								<img src={Facebook} alt='mail' />
							</div>
							<div>
								<img src={Twitter} alt='mail' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
