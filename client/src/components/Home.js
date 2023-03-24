import SideBar from './Home/SideBar/SideBar';
import VideoList from './Home/VideoList/VideoList';

function Home() {
  return (
    <div>
      <SideBar />
      <VideoList action="getVideos" />
    </div>
  );
}

export default Home;
