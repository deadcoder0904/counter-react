import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ value, modifier}) => <button id={value} onClick={() => modifier(value)}> {value} </button>

class Counter extends Component {
	constructor() {
		super()
		this.state = {
			value: 0
		}
		this.modifier = this.modifier.bind(this)
	}

	modifier(value) {
		this.setState({
			value: this.state.value + parseInt(value)
		})
	}

	render() {
		return (
				<div>
					<h1>Counter React : {this.state.value}</h1>
					<div id="app">
						<Button value='-1' modifier={this.modifier} />
						<Button value='-2' modifier={this.modifier} />
						<Button value='-5' modifier={this.modifier} />
						<Button value='-100' modifier={this.modifier} />
						<Button value='+1' modifier={this.modifier} />
						<Button value='+2' modifier={this.modifier} />
						<Button value='+5' modifier={this.modifier} />
						<Button value='+100' modifier={this.modifier} />
					</div>
				</div>
			)
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));
