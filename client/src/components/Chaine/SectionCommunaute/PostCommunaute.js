import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AutoExpandingTextarea from "./AutoExpandingTextarea";

function PostCommunaute(props) {

    const content = useRef();

    async function contentSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/channels/postCommunaute", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: content.current.value,
            id_user: 1,
          })
        })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          console.log(json);
        });
        props.onCommentSubmit(); 
    }

    return (
        <div className='content_submit'>
            <Form className='form_submit_community'>
                <AutoExpandingTextarea
                    ref={content}
                />
                    <Button variant="primary" className='submit_content' type="submit" onClick={(e) => contentSubmit(e)}>
                        Publier
                    </Button>
            </Form>
        </div>
    );
}

export default PostCommunaute;