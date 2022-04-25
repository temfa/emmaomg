import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Music from "./pages/music/music";
import Band from "./pages/band/band";

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Landing />}>
						<Route path='about' element={<About />} />
						<Route path='music' element={<Music />} />
						<Route path='band' element={<Band />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
