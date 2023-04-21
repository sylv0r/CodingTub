import VideoList from '../Home/VideoList/VideoList';

function Abonnements() {

	return (
		<VideoList action={`getSubscriptionsVideos`} />
	);

}

export default Abonnements;
