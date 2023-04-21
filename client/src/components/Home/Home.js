import VideoList from './VideoList/VideoList';

export default function Home() {
  
  return (
    <div>
      <VideoList action="getVideos" />
    </div>
    
  );
}