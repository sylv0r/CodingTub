import React, { useState } from "react";
import axios from "axios";

function DeleteVidPlay({id_video, playlist_name}) {
  const [confirmation, setConfirmation] = useState(false);

  const handleDelete = async () => {
    await fetch('http://localhost:3001/playlists/delVidPlay', {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "authorization" : localStorage.getItem('jwt')},
        body: JSON.stringify({
            playlist_name: playlist_name,
            id_video: id_video
            })
        })
  };

  return (
    <div>
        <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default DeleteVidPlay;
