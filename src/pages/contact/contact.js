import React from "react";
import Footer from "../../components/footer/footer";
// import Header from "../../components/header/header";
import "./contact.css";
import Mail from "../../assets/mail.png";
import Youtube from "../../assets/Youtube.png";
import Twitter from "../../assets/twitter1.png";
import Facebook from "../../assets/facebook1.png";
import Instagram from "../../assets/instagram.png";
import Headertest from "../../components/header/headertest";

const Contact = () => {
	return (
		<>
			<div className='contact-container'>
				<Headertest />
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
					<div className='contact-form'>
						<form>
							<div className='form-container'>
								<input type='text' autoComplete='off' required />
								<label for='name' className='label-name'>
									<span className='content-name'>Name</span>
								</label>
							</div>
							<div className='form-container'>
								<input type='text' autoComplete='off' required />
								<label for='email' className='label-name'>
									<span className='content-name'>Email</span>
								</label>
							</div>
							<div className='event'>
								<div className='event-test'>
									<input type='text' autoComplete='off' required />
									<label for='phone' className='label-name'>
										<span className='content-name'>Phone</span>
									</label>
								</div>
								<select required>
									<option selected>Event Type</option>
									<option></option>
								</select>
							</div>
							<div className='form-containers'>
								<input type='text' required />
								<label for='details' className='label-name'>
									<span className='content-names'>Details</span>
								</label>
							</div>
							<button>Send Request</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
