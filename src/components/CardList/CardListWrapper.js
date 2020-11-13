import React, { Component } from 'react';
import CardList from './CardList/CardList';
import { Pagination } from 'antd';


class CardListWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pages: null,
		}
	};

	render() {
		return (
			<main>
				<div className="card-list__wrapper">
					<CardList />
				</div>	
				{/* <Pagination className="pagination__wrapper" defaultCurrent={1} total={`${pages.pages}0`} showSizeChanger={false}/>			 */}
				<Pagination className="pagination__wrapper" defaultCurrent={1} total={490} showSizeChanger={false}/>			
			</main>
		)
	}
}

export default CardListWrapper;