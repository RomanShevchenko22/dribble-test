import React, { Component } from 'react';
import { Menu } from 'antd';
import { NEW, POPULAR } from '../../../utils/constant';

class Navbar extends Component {
	constructor (props) {
		super(props);
		this.state = {
			current: 'new',
		};
	};

handleClick = e => {
  console.log('click ', e);
  this.setState({ current: e.key });
};


// class Navbar extends Component {

// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			key: 1,
// 		}
// 	}

	// callback = (key) => {
	// 	this.setState({ key: key });
	// }

	render() {
		const { current } = this.state;
		
    return (
			<nav className="navbar">
				<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
					<Menu.Item key="new">
						{NEW}						
					</Menu.Item>	
					<Menu.Item key="popular">
						{POPULAR}						
					</Menu.Item>
				</Menu>
			</nav>
    );
  }
}

	// render() {	
	// 	return (
	// 		<nav>
	// 			<Tabs defaultActiveKey="1" onChange={this.callback}>	          
  //         <TabPane tab={NEW} key="1">
  //           <CardList />
  //         </TabPane>
  //         <TabPane tab={POPULAR} key="2">
  //           <CardList sort />
  //         </TabPane>
  //       </Tabs>         
  //     </nav>			
  //   )
	// }


export default Navbar;