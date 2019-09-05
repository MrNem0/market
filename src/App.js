import React, { Component} from 'react';
import {hot} from 'react-hot-loader';

import NavBar from './components/NavBar'
import AuthPage from './components/AuthPage'

class App extends Component{
	render(){
		return(
			<div className="App">
				<NavBar/>
				<AuthPage />
			</div>
		);
	}
}

export default hot(module)(App);