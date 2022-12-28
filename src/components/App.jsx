import React, { Component } from 'react';
import  {Statistics} from './Statistics/Statistics';
import { Box } from './Box/Box';



export class App extends Component {



	state = {
  		good: 0,
  		neutral: 0,
  		bad: 0
	}
	
	onClickGood = () => {
		this.setState(prevState => {
			return {
				good: prevState.good + 1,
			}
		})
	}

	onClickNeutral = () => {
		this.setState(prevState => {
			return {
				neutral: prevState.neutral + 1,
			}
		})
		}
	
	onClickBad = () => {
		this.setState(prevState => {
			return {
				bad: prevState.bad + 1,
			}
		})
	}

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
				<section>
				<h1>Please Leave feedback</h1>
				
				<button onClick={this.onClickGood}>Good</button>
				<button onClick={this.onClickNeutral}>Neutral</button>
				<button onClick={this.onClickBad}>Bad</button>			
				
				</section>
				<section>
						<h2>Statistics</h2>
						<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={completedFeedbackCount} positivePercentage={isNaN(completedPositiveFeedback) ? 0 : completedPositiveFeedback }/>
						{/* <p>Good:<span>{this.state.good}</span></p>
						<p>Neutral:<span>{this.state.neutral}</span></p>
						<p>Bad:<span>{this.state.bad}</span></p>
						<p>Total:<span>{completedFeedbackCount}</span></p>
						<p>Positive feedback:<span>{isNaN(completedPositiveFeedback) ? 0 : completedPositiveFeedback }%</span></p> */}
				</section>
				</Box>
	
			


			</>
	)
}
}

	