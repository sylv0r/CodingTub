
import VideoList from '../Home/VideoList/VideoList';

function Abonnements() {

    let user = localStorage.getItem('user_id')

  return (
    <div>
      <VideoList action={`getSubscriptionsVideos/${user}`} />
    </div>
  );
}

export default Abonnements;
