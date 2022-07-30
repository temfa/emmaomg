import React, { useState } from "react";
import "./brand.css";
import Brand1 from "../../assets/image 4.png";
import Brand2 from "../../assets/image 5.png";
import Emma from "../../assets/emma.png";
import Layout from "../../utils/layout";
import Iframe from "../../components/iframe/iframe";
import Loader from "../../components/loader/loader";

const Brand = () => {
	const [recent, updateRecent] = useState(false);
	const [loader, setLoader] = useState(true);
	const hideLoader = () => {
		setLoader(false);
	};

	return (
		<Layout>
			<div className='brand-header'>
				<div className='brand-text'>
					<h2>Brand Influencing</h2>
					<div className='brand-details'>
						<p>
							I create contents and also help to influence for brands. Request
							for my rates card and also view previous projects, below are some
							of the brands I've worked with so far.
						</p>
						<div className='brand-design'>
							<img src={Brand1} alt='Brand 1' />
							<img src={Brand2} alt='Brand 2' />
						</div>
						<div className='brand-button'>
							<a onClick={() => updateRecent(!recent)}>Some of my Work</a>
							<a href='mailto:ohemgeeltd@gmail.com' target='_blank'>
								Request for Rates Card
							</a>
						</div>
					</div>
					{recent && (
						<>
							<div className='recent-container'>
								{loader ? <Loader /> : null}
								<Iframe
									link='https://youtu.be/LbFoTo5j9N4'
									title='#OhEmGeeCommercials | CARS 45 - Buy, Sell, Swap'
									iframe='https://www.youtube.com/embed/LbFoTo5j9N4'
									action={hideLoader}
								/>

								{loader ? <Loader /> : null}
								<Iframe
									link='https://youtu.be/17CmlCAPm9w'
									title='#OhEmGeeCommercials - Nescafe Get Started Promo 2'
									iframe='https://www.youtube.com/embed/17CmlCAPm9w'
									action={hideLoader}
								/>
							</div>
							<div className='recent-container'>
								{loader ? <Loader /> : null}
								<Iframe
									link='https://youtu.be/j8eE0CSo0Ms'
									title='THE ALARM #OhEmGeeCommercials'
									iframe='https://www.youtube.com/embed/j8eE0CSo0Ms'
									action={hideLoader}
								/>

								{loader ? <Loader /> : null}
								<Iframe
									link='https://youtu.be/lC5YFsgeZgw'
									title='I just made another hit song for Zenith Bank 😁 | EmmaOMG'
									iframe='https://www.youtube.com/embed/lC5YFsgeZgw'
									action={hideLoader}
								/>
							</div>
							<div className='recent-container last'>
								{loader ? <Loader /> : null}
								<Iframe
									link='https://youtu.be/FKBDnPtvSlg'
									title='Peakmas is here! | EmmaOMG'
									iframe='https://www.youtube.com/embed/FKBDnPtvSlg'
									action={hideLoader}
								/>
							</div>
						</>
					)}
				</div>
				<div className='emma-img'>
					<img src={Emma} alt='Emma' />
				</div>
			</div>
		</Layout>
	);
};

export default Brand;
