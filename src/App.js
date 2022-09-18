import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Flashcards from "./components/Flashcards";
import MWGemCalculator from "./components/MWCalculator";
import Flashcard from "./components/Flashcard";
import FlashcardsGenerator from "./components/FlashcardsGenerator";
import Home from "./components/Home";
import About from './components/About'
import { useDocumentTitle } from "./hooks/useDocumentTitle";
function App() {
	const [siteTitle, setSiteTitle] = useDocumentTitle("RHPortfolio");
	return (
		<Router>
			<div className="App">
				<nav className="NavigationBar">
					<ul className="NavigationList">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
						 <Link to="/About">About</Link>
					</li>
						<li>
							<Link to="/Flashcards">Flashcards Reader Utility</Link>
						</li>
						<li>
							<Link to="/FlashcardsGenerator">Flashcards Generator</Link>
						</li>
						<li>
							<Link to="/MWGemCalculator">MW Gem Calculator</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route
						path="/About"
						element={<About siteTitle={siteTitle}/>}/>
					<Route
						path="/FlashcardsGenerator"
						element={<FlashcardsGenerator siteTitle={siteTitle} />}
					></Route>
					<Route
						path="/Flashcards"
						element={<Flashcards siteTitle={siteTitle} />}
					></Route>
					<Route path="/" element={<Home />} />
					<Route path="/MWGemCalculator" element={<MWGemCalculator />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
