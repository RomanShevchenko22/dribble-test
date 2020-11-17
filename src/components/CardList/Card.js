import React, { useState } from 'react';
import { BASE } from '../../utils/constant';
import ModalImage from './ModalImage';

export default function Card({ photo }) {
	const [visible, setVisible] = useState(false);

	const src = `${BASE}/media/${photo.image.name}`;
	const alt = photo.image.id;
	const key = photo.image.name;

	return (
		<div 
			key={key} 
			onClick={() => setVisible(!visible)}
		>					
			<img					  
				className="card-image" 
				src={src} 					
				alt={alt}						 
			/>
			<ModalImage 
				title={photo.name}
				src={src}
				alt={alt}
				keyModal={photo.image.id}
				visible={visible}
				setVisible={setVisible}
			/>
		</div>
	);
}