
import React, { Component } from "react"
 
export class FeedbackOptions extends Component {

	state = {

	}

	render() {
		return (
			this.props.options.map(label => (
				<button>{label}</button>
			))
		)
	}
} 