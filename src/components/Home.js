import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
  <div className="Home">
    <h1>Welcome to my site</h1>
  <p>This is my portfolio site, where I will be hosting my various projects. For more information about me, please check my <Link to="/About">about page</Link>.</p>
  </div>
  )
}
export default Home;