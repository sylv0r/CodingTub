import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AutoExpandingTextarea from "./AutoExpandingTextarea";

function PostCommunaute(props) {

    const content = useRef();
    const [value, setValue] = useState([""]);

    const handleChange = (event) => {
      setValue(event.target.value);
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    };

    async function contentSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/channels/postCommunaute", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: content.current.value,
            id_channel: 1
          })
        })
        .then((response) => {
          props.onContentSubmit();
          return response.json()
        })
        .then((json) => {
          console.log(json);
        });
        setValue("")
    }

    return (
        <div className='content_submit'>
            <Form className='form_submit_community'>
                <textarea className='content'
                    ref={content}
                    value={value}
                    onChange={handleChange}
                    {...props}
                    placeholder="Exprimez-vous !"
                />
                    <Button variant="primary" className='submit_content' type="submit" onClick={(e) => contentSubmit(e)}>
                        Publier
                    </Button>
            </Form>
        </div>
    );
}

export default PostCommunaute;