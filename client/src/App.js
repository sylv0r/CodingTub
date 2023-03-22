import './App.css';





//////////////////////////LIVE\\\\\\\\\\\\\\\\\\\\\\\

//Configuration des sockets pour relier le serveur au client
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');
//Configuration des sockets pour relier le serveur au client

//Configuration des Peer to Peer 
const pc = new RTCPeerConnection();

// Connection Peer
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    stream.getTracks().forEach(track => {
      pc.addTrack(track, stream);
    });

    // Envoie la requete au serveur
    pc.createOffer().then(offer => {
      pc.setLocalDescription(offer);
      socket.emit('offer', offer);
    });
  });

// Reçois la réponse du serveur
socket.on('answer', answer => {
  pc.setRemoteDescription(answer);
});

// Reçois un ICE candidat du serveur
socket.on('candidate', candidate => {
  pc.addIceCandidate(candidate);
});

//////////////////////////LIVE\\\\\\\\\\\\\\\\\\\\\\\






function App() {
  return (
    <div className="App">
      <p>video</p>
    </div>
  );
}

export default App;