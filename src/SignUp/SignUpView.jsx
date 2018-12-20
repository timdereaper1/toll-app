import React from 'react';
import { Input, Button } from '../lib/components';
import './css/signupview.css';

export const SignUpView = props => {
	return (
		<div className="signup-view">
			<div style={{ maxWidth: 450, margin: 'auto' }}>
				<h1 className="header">Sign up View</h1>
				<Input
					type="text"
					placeholder="name"
					onChange={props.onChange}
					defaultValue={props.name}
					name="name"
				/>
				<Input
					type="tel"
					placeholder="telephone"
					onChange={props.onChange}
					defaultValue={props.telephone}
					name="telephone"
				/>
				<Input
					type="password"
					placeholder="password"
					onChange={props.onChange}
					defaultValue={props.password}
					name="password"
				/>
				<div style={{ textAlign: 'right' }}>
					<Button text="Submit" onClick={props.onClick} />
				</div>
			</div>
		</div>
	);
};
