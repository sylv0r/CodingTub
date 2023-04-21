import VideoList from '../Home/VideoList/VideoList';
import './History.scss';
import React from 'react';

function History() {

	return (
		<VideoList action={`getHistory`} />
	);
}

export default History;
