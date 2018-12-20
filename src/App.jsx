import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './lib/routes';

class App extends Component<{}> {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					{routes.map((route, _i) => (
						<Route key={_i} {...route} />
					))}
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
