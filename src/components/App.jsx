import React, { Component } from 'react';
import { Box } from './Box/Box';



export class App extends Component {

	state = {
  		good: 0,
  		neutral: 0,
  		bad: 0
}

	render() {
		return (
			<>
				<Box
					maxWidth="1140px"
					m="0 auto"
					background="orange"
					p="20px"

				>
				<section>
				<h1>Please Leave feedback</h1>
			
				<button>Good</button>
				<button>Neutral</button>
				<button>Bad</button>		
				
				</section>
				<section>
					<h2>Statistics</h2>
						<p>Good:<span>{this.state.good}</span></p>
						<p>Neutral:<span>{this.state.neutral}</span></p>
						<p>Bad:<span>{this.state.bad}</span></p>	
				</section>
				</Box>
	
			


			</>
	)
}
}

