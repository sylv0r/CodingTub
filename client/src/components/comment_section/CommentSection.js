import { useState, useEffect } from 'react';
import AddComment from './add_comment/AddComment';
import ShowComment from './show_comment/ShowComment';
import { useSearchParams  } from 'react-router-dom'

function CommentSection(props) {

    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send

    const [comments, setComments] = useState([]);

    async function getComments() {
        const response = await fetch(`http://localhost:3001/videos/getComment/${id}`, {
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
