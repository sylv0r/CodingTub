import SideBar from '../Home/SideBar/SideBar';
import VideoList from '../Home/VideoList/VideoList';

function Abonnements() {
  return (
    <div>
      <VideoList action="getSubscriptionsVideos" />
    </div>
  );
}

export default Abonnements;
