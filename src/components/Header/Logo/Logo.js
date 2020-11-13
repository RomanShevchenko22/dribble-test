import React, { Component } from 'react';
// import { LogoImage } from './logo.svg';

class Logo extends Component {
	render() {	
		return (
			<img src={ require('./logo.png') } alt="Main logo"/>		
		)
	}
}

export default Logo;