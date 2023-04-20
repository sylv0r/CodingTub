
import VideoList from '../Home/VideoList/VideoList';
import './History.scss';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function History() {

	const [user, setUser] = useState(null);


	useEffect(() => {
		axios.post('http://localhost:3001/users/getUserId', {
			hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
			})
			.then(async (response) => {
			setUser(response.data)
			})
	}, [])
	
	return (
		user !== null ? <VideoList action={`getHistory/${user}`} /> : null
	);
}

export default History;
