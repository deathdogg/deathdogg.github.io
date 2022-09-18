import './About.css'
import {useDocumentTitle} from '../hooks/useDocumentTitle'
import react from 'react'
const About = props => {
	const [title, setTitle] = useDocumentTitle(props.siteTitle+": About")
	return (
		<div className="About">
		<h2>Bio</h2>
		<p>My name is Ricardo.</p>
		</div>);
	}
export default About;