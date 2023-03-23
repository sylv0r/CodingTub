import SideBar from './Home/SideBar/SideBar';
import VideoList from './Home/VideoList/VideoList';

function Abonnements() {
  return (
    <div>
      <SideBar />
      <VideoList action="channels/getSubscriptions" />
    </div>
  );
}

export default Abonnements;
