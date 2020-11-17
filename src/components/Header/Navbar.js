import React, {  useState } from 'react';
import { Menu } from 'antd';
import { NEW, POPULAR } from '../../utils/constant';
// import { useRoutes } from '../../pages/routes';

export default function Navbar() {
	const [current, setCurrent] = useState('new');
	
	function handleClick (event) {
		console.log('click ', event);
		setCurrent(event.key );
	};

	return (
		<nav className="navbar">
				<Menu onClick={handleClick} selectedKeys={[current]}  mode="horizontal">
					<Menu.Item key="new">
						<a href="/new">{NEW}</a>
						{/* NEW */}
					</Menu.Item>	
					<Menu.Item key="popular">
						{/* POPULAR */}
						<a href="/popular">{POPULAR}</a>
					</Menu.Item>
					<Menu.Item key="popular1">
						{/* POPULAR */}
						<a href="/popular1">{POPULAR}</a>
					</Menu.Item>
				</Menu>
		</nav>
	);
}