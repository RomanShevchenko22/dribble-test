import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import LoginBtn from './Button';

export default function Header() {
	return (
		<header className="header">
			<Logo />
			<Navbar />
			<LoginBtn />
		</header>	
	);
};