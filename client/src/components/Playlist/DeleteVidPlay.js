import React from "react";

function DeleteVidPlay({id_video, playlist_name}) {

  const handleDelete = async () => {
    await fetch('http://localhost:3001/playlists/delVidPlay', {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "authorization" : localStorage.getItem('jwt')},
        body: JSON.stringify({
            playlist_name: playlist_name,
            id_video: id_video
		})
	})
	await fetch(`http://localhost:3001/videos/deleteLike/`, {
		method: 'DELETE',
		headers: { authorization: localStorage.getItem("jwt"), 'Content-Type': 'application/json' },
		body: JSON.stringify({
			video_id: id_video,
		}),
	});

	window.location.reload()
	
  };

  return (
    <div>
        <i className="fa-solid fa-xmark" onClick={handleDelete}></i>
    </div>
  );
}

export default DeleteVidPlay;
