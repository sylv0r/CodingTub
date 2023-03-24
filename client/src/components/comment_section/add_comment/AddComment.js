import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddComment(props) {

    const comment = useRef();

    async function commentSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/channels/postComment", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            comment: comment.current.value,
            id_users: 4,
            id_video: 1
          })
        })
        .then((response) => {
          props.onCommentSubmit(); 
          return response
        })
     
        
    }

    return (
        <div>
            <Form>
                <Form.Control
                    ref={comment}
                    type="text"
                    placeholder="Entrer le titre" 
                />
                    <Button variant="primary" type="submit" onClick={(e) => commentSubmit(e)}>
                        publier
                    </Button>
            </Form>
        </div>
    );
}

export default AddComment;
