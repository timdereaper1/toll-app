import React from 'react';
import './css/signup.css';
import { LogoView, SignUpView } from '../SignUp';

export default class SignUp extends React.Component {
	state = {
		name: '',
		telephone: '',
		password: ''
	};

	render() {
		return (
			<div className="signup">
				<LogoView />
				<SignUpView
					name={this.state.name}
					telephone={this.state.telephone}
					password={this.state.password}
					onChange={this.handleChange}
					onClick={this.handleClick}
				/>
			</div>
		);
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleClick = () => {
		console.log(this.state);
	};
}
