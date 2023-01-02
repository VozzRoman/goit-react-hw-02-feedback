import { SectionTitle } from "./SectionStyle";
import PropTypes from 'prop-types';


export const Section = ({ children, title }) => {
	return (
			<>
		<SectionTitle>
			{title}
			{children}
		</SectionTitle>
	
	</>
	)

}

//------PropTypes

Section.propTypes = {
	children: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
}