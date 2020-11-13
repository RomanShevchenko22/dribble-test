import React, { Component } from 'react';
import { getUserData } from '../../../api/card';
import { COUNT_RESULTS, BASE } from '../../../utils/constant';

class CardList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			pages: null
		}
	};

	componentDidMount() {
		getUserData(true, false, COUNT_RESULTS).then((response) => {
			console.log('response', response);			
			this.setState({ 
				photos: response.data.data,
				pages: response.data.countOfPages
			 });
			 
		})
	};



	render() {
		const { photos } = this.state;

		if (photos.lenght === 0) return null;
// {/* <p>{photo.name}</p> */}
		return (
			photos.map((photo) => 
				<img
				  className="card-image" 
					src={`${BASE}/media/${photo.image.name}`} 					
					alt={photo.image.id}
					key={photo.image.name} 
				/>
		 	)
		);
	}
}

export default CardList;