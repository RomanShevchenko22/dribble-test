import React from 'react';
import Card from './Card';

export default function CardList(props) {

	if (!props.photos) return null;

	return (props.photos.map((photo) => <Card key={photo.image.id} photo={photo} />));
};