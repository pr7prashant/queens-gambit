import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/home/home';

function App() {
	return (
		<Switch>
			<Route path='/' component={Home} />
			<Redirect to='/' />
		</Switch>
	);
}

export default App;
