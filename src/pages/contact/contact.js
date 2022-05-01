import React from "react";
import "./contact.css";
import Mail from "../../assets/mail.png";
import Youtube from "../../assets/Youtube.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.png";
import LayoutHome from "../../utils/layoutHome";

const Contact = () => {
	return (
		<LayoutHome>
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
		</LayoutHome>
	);
};

export default Contact;
