import { useEffect } from 'react';
import React, { useState } from 'react';


function Comment(props) {


    return (
        <div>
            {props.comments.map((comment) => (
                <div key={comment.id}> {/* ajoutez une prop key unique */}
                    <span id='pseudo'>{comment.pseudo}: </span>
                    <span id='content_comment'>{comment.comment}</span>
                </div>
            ))}
        </div>
    );
    
};

export default Comment;