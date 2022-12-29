
import React, { Component } from "react"
 
export class FeedbackOptions extends Component {

	

	render() {
		
		return (
			this.props.options.map(label => (
				<button
					key={label}
					onClick={() => this.props.onLeaveFeedback(label)}
				>{label}</button>
			))
		)
	}
} 