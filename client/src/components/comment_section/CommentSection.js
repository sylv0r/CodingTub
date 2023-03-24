import { useState, useEffect } from 'react';
import AddComment from './add_comment/AddComment';
import ShowComment from './show_comment/ShowComment';

function CommentSection() {
    const [comments, setComments] = useState([]);

    async function getComments() {
        const response = await fetch("http://localhost:3001/videos/getComment/1", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        });
    
        const data = await response.json();
        setComments(data);
    }

    useEffect(()=>{
        getComments();
    }, []);

    function handleCommentSubmit() {
        getComments();
    }

    return (
        <div>
            <AddComment onCommentSubmit={handleCommentSubmit} />
            <br />
            <ShowComment comments={comments} />
        </div>
    );
}

export default CommentSection;
