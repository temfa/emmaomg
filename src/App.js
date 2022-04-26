import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Music from "./pages/music/music";
import Band from "./pages/band/band";
import Brand from "./pages/brand/brand";
import Mc from "./pages/mc/mc";
import Birthday from "./pages/birthday/birthday";
import Online from "./pages/online/online";
import Contact from "./pages/contact/contact";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='about' element={<About />} />
				<Route path='music' element={<Music />} />
				<Route path='band' element={<Band />} />
				<Route path='brand' element={<Brand />} />
				<Route path='mc' element={<Mc />} />
				<Route path='birthday' element={<Birthday />} />
				<Route path='online' element={<Online />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
