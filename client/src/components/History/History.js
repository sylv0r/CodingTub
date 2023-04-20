
import VideoList from '../Home/VideoList/VideoList';
import './History.scss';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function History() {

	const [user, setUser] = useState(null);


	useEffect(() => {
		axios.post('http://localhost:3001/users/getUserId', {
			method: "POST",
        	headers: { "Content-Type": "application/json", "authorization" : localStorage.getItem('jwt')},
			})
			.then(async (response) => {
			setUser(response.data)
			})
	}, [])
	
	return (
		<VideoList action={`getHistory`} />
	);
}

export default History;
