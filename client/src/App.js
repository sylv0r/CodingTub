import './App.css';
import Header from './components/Header/Header'
import SideBar from './components/Header/SideBar';
import VideoList from './components/VideoList/VideoList';

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <VideoList />
    </div>
  );
}

export default App;
