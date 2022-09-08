import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Flashcards from './components/Flashcards'
import Flashcard from './components/Flashcard'
import FlashcardsGenerator from './components/FlashcardsGenerator';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/Flashcards">Flashcards</Link>
            </li>
            <li>
              <Link to="/FlashcardsGenerator">Flashcards Generator</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/FlashcardsGenerator" element={<FlashcardsGenerator />}>
        </Route>
        <Route path="/Flashcards" element={<Flashcards />}>
        </Route>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </Router>
  );
}

const Home = () => {
  return <p>Welcome to my site</p>
}
export default App;
