import { useState, useEffect } from 'react'

import '../assets/js/app-head.js';
import '../assets/js/uikit-components.js';
import '../assets/js/data-attr-helper.js';
import '../assets/js/anime-helper.js';
import '../assets/js/swiper-helper.js';
import '../assets/js/typed-helper.js';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import  '../assets/css/uikit.min.css'; 
import '../assets/css/theme/main.css';
import { set } from 'animejs';


function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const delay = async () => {
		  // Simulate a delay (e.g., 2000 milliseconds)
		  await new Promise(resolve => setTimeout(resolve, 2000));
		  
		  // Set loading to false after the delay
		  setLoading(false);
		};
	
		// Call the delay function
		delay();
	}, []);

	const Preloader = () => {
		return (
			<div className="nerko-loader">
				<div className="loader-inner"></div>
			</div>
		);
	};	

	return (
		<>
			{loading && <Preloader />}
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;