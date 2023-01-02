
import React, { Component } from "react"
import { ButtonBox, Button } from "./FeedOptStyle"
import PropTypes from 'prop-types';
 
export class FeedbackOptions extends Component {

	static propTypes = {
		options: PropTypes.array.isRequired,
		onLeaveFeedback: PropTypes.func.isRequired,
	}

	render() {	
		return (
			
			<ButtonBox>
				
				{	this.props.options.map(label => (
					<Button
					key={label}
					onClick={() => this.props.onLeaveFeedback(label)}
					>{label}
					</Button>
		))}
			</ButtonBox>
	
		
		)
	}
} 

