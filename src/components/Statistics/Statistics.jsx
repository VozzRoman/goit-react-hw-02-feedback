import { Info, ItemBox } from "./StatStyled";
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
	<ItemBox>
		<Info>Good:<span> {good}</span></Info>
		<Info>Neutral:<span> {neutral}</span></Info>
		<Info>Bad:<span> {bad}</span></Info>
		<Info>Total:<span> {total}</span></Info>
		<Info>Positive feedback:<span> {positivePercentage}%</span></Info>
	</ItemBox>	

	)
		};

//------PropTypes

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
}
