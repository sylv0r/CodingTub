import VideoList from './VideoList/VideoList';

function Home() {
  return (
    <div>
      <VideoList action="getVideos" />
    </div>
    
  );
}

export default Home;
