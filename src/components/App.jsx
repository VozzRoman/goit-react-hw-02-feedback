import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Card } from './Box/Card';




export class App extends Component {
	state = {
  		good: 0,
  		neutral: 0,
  		bad: 0
	}
	clickButton = option => {
		this.setState({
			[option]: this.state[option] + 1
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
				<Box maxWidth="1140px" height="100vh" m="0 auto" background="orange" p="20px">
				
				<Card maxWidth="400px" background="gray" borderRadius="8px" p="20px" m="0 auto">
			
				<Section title="Please leave feedback">
						<FeedbackOptions
							options={['good', 'neutral', 'bad']}
							onLeaveFeedback={this.clickButton}
						/>
				</Section>
				
				
					{completedFeedbackCount === 0 ? <Notification title="There is no feedback" /> :
				<Section title="Statistic">
							<Statistics
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={completedFeedbackCount}
							positivePercentage={isNaN(completedPositiveFeedback) ? 0 : completedPositiveFeedback} />
				</Section>
						}

				</Card>
				</Box>
	
			


			</>
	)
}
}

	