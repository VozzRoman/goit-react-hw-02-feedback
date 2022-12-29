
import React, { Component } from "react"
import { ButtonBox, Button } from "./FeedOptStyle"
 
export class FeedbackOptions extends Component {
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