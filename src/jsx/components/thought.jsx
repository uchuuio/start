import React from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const state = {
	thought: {
		en: '',
		jp: '',
	},
};

// Build our app
class Thought extends React.Component {
	constructor(props) {
		super(props);
		this.state = state;
	}

	componentDidMount() {
		fetch('https://zen.pagu.co/api')
			.then((response) => response.json())
			.then((data) => {
				const enThought = data.thought_en.replace(/\|/g, '<br />');
				const jpThought = data.thought_jp.replace(/\|/g, '<br />');

				this.setState({
					thought: {
						en: enThought,
						jp: jpThought,
					},
				});
			});
	}

	/*
	 * Render the app
	 */
	render() {
		return (
			<div className={ (this.state.thought.en !== '') ? 'thought' : 'thought hide'}>
				<h3>Thought of the day</h3>
				<p dangerouslySetInnerHTML={{
					__html: this.state.thought.jp,
				}}
				></p>
				<p dangerouslySetInnerHTML={{
					__html: this.state.thought.en,
				}}
				></p>
			</div>
		);
	}
}

export default Thought;
