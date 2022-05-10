import React, { useRef } from "react";
import "./contact.css";
import Mail from "../../assets/mail.png";
import Youtube from "../../assets/Youtube.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import LayoutHome from "../../utils/layoutHome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		let name = document.getElementById("name");
		let mail = document.getElementById("mail");
		let phone = document.getElementById("phone");
		let event = document.getElementById("event");
		let message = document.getElementById("message");

		emailjs
			.sendForm(
				"service_yrziodf",
				"template_x0rk8yo",
				form.current,
				"user_FaGRmNGxIu6XlKUy68tnB"
			)
			.then(
				() => {
					toast.success("Message Sent Successfully");
					name.value = "";
					mail.value = "";
					phone.value = "";
					event.value = "";
					message.value = "";
				},
				(error) => {
					toast.error(error.text);
				}
			);
	};
	return (
		<LayoutHome>
			<ToastContainer />
			<div className='contact-header'>
				<div>
					<h2>Contact us</h2>
					<div className='mail-div'>
						<img src={Mail} alt='mail' />
						<a href='mailto:ohemgeeltd@gmail.com'>ohemgeeltd@gmail.com</a>
					</div>
					<div className='mail-div'>
						<img src={Mail} alt='mail' />
						<a href='mailto:theohemgeeband@gmail.com'>
							theohemgeeband@gmail.com
						</a>
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
					<form ref={form} onSubmit={sendEmail}>
						<div className='form-container'>
							<input
								type='text'
								autoComplete='off'
								name='name'
								id='name'
								required
							/>
							<label htmlFor='name' className='label-name'>
								<span className='content-name'>Name</span>
							</label>
						</div>
						<div className='form-container'>
							<input
								type='text'
								autoComplete='off'
								name='mail'
								id='mail'
								required
							/>
							<label htmlFor='email' className='label-name'>
								<span className='content-name'>Email</span>
							</label>
						</div>
						<div className='event'>
							<div className='event-test'>
								<input
									type='text'
									autoComplete='off'
									name='phone'
									id='phone'
									required
								/>
								<label htmlFor='phone' className='label-name'>
									<span className='content-name'>Phone</span>
								</label>
							</div>
							<select required id='event'>
								<option value=''>Choose an Event Type</option>
								<option>1</option>
							</select>
						</div>
						<div className='form-containers'>
							<input type='text' required name='message' id='message' />
							<label htmlFor='details' className='label-name'>
								<span className='content-names'>Details</span>
							</label>
						</div>
						<button type='submit'>Send Request</button>
					</form>
				</div>
			</div>
		</LayoutHome>
	);
};

export default Contact;
