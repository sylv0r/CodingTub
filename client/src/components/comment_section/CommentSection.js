import { useState, useEffect } from 'react';
import AddComment from './add_comment/AddComment';
import ShowComment from './show_comment/ShowComment';

function CommentSection(props) {
    const [comments, setComments] = useState([]);

    async function getComments() {
        console.log('aaaaaaaaaaaaaaaaaaaaaa')
        const response = await fetch("http://localhost:3001/channels/getComment/1", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        });
    
        const data = await response.json();
        setComments(data);
    }

    useEffect(()=>{
        getComments();
    }, []);



    return (
        <div>
            <AddComment onCommentSubmit={getComments} />
            <br />
            <ShowComment comments={comments} />
        </div>
    );
}

export default CommentSection;
