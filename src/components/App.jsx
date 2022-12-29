import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';



export class App extends Component {



	state = {
  		good: 0,
  		neutral: 0,
  		bad: 0
	}
	
	// onClickGood = () => {
	// 	this.setState(prevState => {
	// 		return {
	// 			good: prevState.good + 1,
	// 		}
	// 	})
	// }

	// onClickNeutral = () => {
	// 	this.setState(prevState => {
	// 		return {
	// 			neutral: prevState.neutral + 1,
	// 		}
	// 	})
	// 	}
	
	// onClickBad = () => {
	// 	this.setState(prevState => {
	// 		return {
	// 			bad: prevState.bad + 1,
	// 		}
	// 	})
	// }


	countTotalFeedback = () => {
		// const keys = this.state;
		// const value = Object.values(keys)
		// const total = value.reduce((acc, number) => {
		// 	return acc + number;
		// }, 0)
		const total = this.state.good + this.state.neutral + this.state.bad;
		return total;
	}

	countPositiveFeedbackPercentage = () => {
		const roundFeedback = this.state.good / this.countTotalFeedback() * 100;
		let precentageFeedback = Math.round(roundFeedback);
		return precentageFeedback;
	} 

	render() {
	
		
		const completedFeedbackCount = this.countTotalFeedback();
		const completedPositiveFeedback = this.countPositiveFeedbackPercentage(); 
		return (
			<>
				<Box maxWidth="1140px" m="0 auto" background="orange" p="20px">
			
					<Section title="Please leave feedback">
						<FeedbackOptions options={['good', 'neutral', 'bad']} />
					{/* <button onClick={this.onClickGood}>Good</button>
					<button onClick={this.onClickNeutral}>Neutral</button>
					<button onClick={this.onClickBad}>Bad</button>	 */}
				</Section>
				
				<Section title="Statistic">
						<Statistics
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={completedFeedbackCount}
							positivePercentage={isNaN(completedPositiveFeedback) ? 0 : completedPositiveFeedback} />
				</Section>
					
				
			
	
						
						
						
				</Box>
	
			


			</>
	)
}
}

	