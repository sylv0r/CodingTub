
import VideoList from '../Home/VideoList/VideoList';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Abonnements() {

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
		<VideoList action={`getSubscriptionsVideos`} />
	);
}

export default Abonnements;
