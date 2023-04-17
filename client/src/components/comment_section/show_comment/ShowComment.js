import { useEffect } from 'react';
import React, { useState } from 'react';



function Comment(props) {
const [reversedComments, setReversedComments] = useState([]);

useEffect(() => {
    setReversedComments([...props.comments].reverse());
}, [props.comments]);

return (
    <div>
        {reversedComments.map((comment) => (
            <div key={comment.id}>
                <span id='pseudo'>{comment.pseudo}: </span>
                <span id='content_comment'>{comment.comment}</span>
            </div>
        ))}
    </div>
);

    
};

export default Comment;