import VideoList from '../Home/VideoList/VideoList';

import React from 'react';

function History() {

	return (
		<VideoList action={`getHistory`} />
	);
}

export default History;
