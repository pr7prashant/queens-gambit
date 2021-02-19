import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'js/components/app/app';
import rootReducer from 'src/js/reducers/rootReducer';
import './index.scss';

const store = createStore(rootReducer);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('react-root')
);
