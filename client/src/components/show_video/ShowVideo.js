import React from 'react';
import './show_video.scss';
import Video from '../video/Video.js';
import Comment from '../comment_section/CommentSection.js';

function ShowVideo() {
    return (
        <div>
            <Video />
            <Comment />
            

        </div>
    
       
    );
}

export default ShowVideo;