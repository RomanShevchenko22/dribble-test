import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CardList from './CardList';
import { Pagination } from 'antd';
import { getUserData } from '../../api/card';
import { COUNT_RESULTS } from '../../utils/constant';
// import { useRoutes } from '../../pages/routes';

export default function CardArea() {
	const [photos, setPhotos] = useState([]);
	const [pages, setPages] = useState(null);

	useEffect(() => {
		getUserData(true, false, COUNT_RESULTS).then((response) => {
			setPhotos(response.data.data);
			setPages(response.data.countOfPages);
		})
	}, []);

	if (!pages) return null;	

	return (
		<BrowserRouter>
				<main>
					<div className="card-list__wrapper">
						{/* {useRoutes}						 */}
						<CardList photos={photos}/> 
					</div>	
					<Pagination className="pagination__wrapper" defaultCurrent={1} total={`${pages}0`} showSizeChanger={false}/>			
				</main>
		</BrowserRouter>
	);
};