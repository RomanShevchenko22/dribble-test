import React, { Component } from 'react';
import { Button } from 'antd';

class LoginBtn extends Component {
	state = {
		size: 'default',
	};

	render() {
		const { size } = this.state;

		return (
			<Button size={size}>Log in</Button>		
		)
	}
}

export default LoginBtn;