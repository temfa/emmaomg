import React, { useEffect } from "react";
import "./contact.css";
import Mail from "../../assets/mail.png";
import Youtube from "../../assets/Youtube.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import LayoutHome from "../../utils/layoutHome";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import emailjs from "@emailjs/browser";
import ReactGA from "react-ga";

const Contact = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [event, setEvent] = useState("");
  // const [message, setMessage] = useState("");
  // const form = useRef();

  // const sendEmail = (e) => {
  // 	e.preventDefault();

  // 	emailjs
  // 		.sendForm(
  // 			"service_yrziodf",
  // 			"template_x0rk8yo",
  // 			form.current,
  // 			"user_FaGRmNGxIu6XlKUy68tnB"
  // 		)
  // 		.then(
  // 			() => {
  // 				toast.success("Message Sent Successfully");
  // 				setName("");
  // 				setMail("");
  // 				setPhone("");
  // 				setEvent("");
  // 				setMessage("");
  // 			},
  // 			(error) => {
  // 				toast.error(error.text);
  // 			}
  // 		);
  // };
  return (
    <LayoutHome>
      {/* <ToastContainer /> */}
      <div className="contact-header">
        <div>
          <h2>Contact us</h2>
          <div className="mail-div">
            <img src={Mail} alt="mail" />
            <a href="mailto:ohemgeeltd@gmail.com">ohemgeeltd@gmail.com</a>
          </div>
          <div className="mail-div">
            <img src={Mail} alt="mail" />
            <a href="mailto:theohemgeeband@gmail.com">theohemgeeband@gmail.com</a>
          </div>
          <div className="social-contact">
            <a href="https://www.youtube.com/channel/UCj_IY06T93dst_kvD7UmKcw" target="_blank" rel="noreferrer">
              <img src={Youtube} alt="mail" />
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=/emmaohmagod/" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="mail" />
            </a>
            <a href="https://web.facebook.com/EmmaOhMaGod?_rdc=1&_rdr" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="mail" />
            </a>
            <a href="https://twitter.com/emmaohmagod" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="mail" />
            </a>
          </div>
        </div>
        {/* <div className='contact-form'>
					<form ref={form} onSubmit={sendEmail}>
						<div className='form-container'>
							<input
								type='text'
								autoComplete='off'
								name='name'
								required
								onChange={(e) => {
									setName(e.target.value);
								}}
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
								onChange={(e) => {
									setMail(e.target.value);
								}}
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
									onChange={(e) => {
										setPhone(e.target.value);
									}}
									required
								/>
								<label htmlFor='phone' className='label-name'>
									<span className='content-name'>Phone</span>
								</label>
							</div>
							<select
								required
								onChange={(e) => {
									setEvent(e.target.value);
								}}>
								<option value=''>Choose an Event Type</option>
								<option value='Birthday-shoutout'>Birthday Shoutout</option>
								<option value='Brand-Influencing'>Brand Influencing</option>
								<option value='MC/Comedian'>MC/Comedian</option>
							</select>
						</div>
						<div className='form-containers'>
							<input
								type='text'
								required
								name='message'
								onChange={(e) => {
									setMessage(e.target.value);
								}}
							/>
							<label htmlFor='details' className='label-name'>
								<span className='content-names'>Details</span>
							</label>
						</div>
						<button type='submit'>Send Request</button>
					</form>
				</div> */}
      </div>
    </LayoutHome>
  );
};

export default Contact;
