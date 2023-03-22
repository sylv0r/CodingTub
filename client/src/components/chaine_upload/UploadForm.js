import React, { useState } from 'react';


const UploadForm = () => {
    return (
        <div className='upload_container'>
            <form action='http://localhost:3001/uploadVideo' className="formUpload">
                <div className="videoUpload">
                    <input type="file" id="fileVideo" accept="video/*" placeholder='video' required />
                </div>
                <div className="formInfosUpload">
                    <input type="text" id="titleVideo" placeholder='titre' required/>
                    <input type="text" id="descriptionVideo" placeholder='description' required/>
                    <input type="text" id="tagsVideo" placeholder='tags' required/>
                </div>
                <div className="miniatureUpload">
                    <input type="file" id="fileMiniature" accept="image/*" placeholder='minia' required />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default UploadForm;