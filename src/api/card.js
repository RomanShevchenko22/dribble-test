import API from './base';

export const getUserData = (new_photo, popular_photo, limit) => (
	API.get('/photos', {
				params: {
				new: new_photo,
				popular: popular_photo,
				limit: limit	
			}
		})
	)
