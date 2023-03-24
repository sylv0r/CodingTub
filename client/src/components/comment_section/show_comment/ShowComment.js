import { useEffect } from 'react';
import React, { useState } from 'react';


function Comment() {
    const [comments, setComment] = useState([]);


    async function getComment() {
        const response = await fetch("http://localhost:3001/channels/getComment/2", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
    
        const data = await response.json();
        setComment(data);
        console.log(data);
    }

    useEffect(()=>{
        getComment()
    }, []) 

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}> {/* ajoutez une prop key unique */}
                    <span id='pseudo'>{comment.pseudo}: </span>
                    <span id='content_comment'>{comment.comment}</span>
                </div>
            ))}
        </div>
    );
    
};

export default Comment;