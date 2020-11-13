import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import LoginBtn from './Button/Button';

class Header extends Component {
	render() {	
		return (
			<header className="header">
				<Logo />
				<Navbar />
				<LoginBtn />
			</header>	
		)
	}
}

export default Header;