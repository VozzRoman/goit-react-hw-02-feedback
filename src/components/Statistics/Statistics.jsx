import { Info, ItemBox } from "./StatStyled";


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
	
	<ItemBox>
		<Info>Good:<span> {good}</span></Info>
		<Info>Neutral:<span> {neutral}</span></Info>
		<Info>Bad:<span> {bad}</span></Info>
		<Info>Total:<span> {total}</span></Info>
		<Info>Positive feedback:<span> {positivePercentage}%</span></Info>
	</ItemBox>	
		
		
);

