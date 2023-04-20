import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './add_comment.scss';

function AddComment(props) {
    const [errorMsg, setErrorMsg] = useState('');
    
    // À partir de la version 6 de React Router
    const navigate = useNavigate();
    const [userId, setUserId] = useState(localStorage.getItem('user_id'));
    // Aller sur une autre page
    
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send
    
    const comment = useRef();

    
    const commentSubmit = async (e) => {
        e.preventDefault();
        if (!comment.current.value) {
            setErrorMsg('Le commentaire ne peut pas être vide');
            return;
        }
        
        try {
            if (!localStorage.getItem("jwt")) {
                navigate('/connexion');
                return null;
            }

           

        

            const response = await fetch('http://localhost:3001/videos/postComment', {
                method: 'POST',
                headers: { authorization: localStorage.getItem("jwt"), 'Content-Type': 'application/json' },
                body: JSON.stringify({comment: comment.current.value, id_video: id})
            });
            
             


            /*             const response = await fetch('http://localhost:3001/channels/createChannel', {
                method: 'POST',
                body: formData,
                headers: {
                    authorization: localStorage.getItem("jwt")
                }
              }); */


            if (response.ok) {
                props.onCommentSubmit();
                comment.current.value = '';
                setErrorMsg(''); // Réinitialiser le message d'erreur
            } else {
                setErrorMsg('Une erreur s\'est produite lors de la publication du commentaire');
            }
        } catch (error) {
            console.error(error);
            setErrorMsg('Une erreur s\'est produite lors de la publication du commentaire');
        }
    };

    return (
        <div className="add-comment-container">
            <form>
                <input
                    ref={comment}
                    type="text"
                    placeholder="Entrer le titre"
                />
                <button variant="primary" type="submit" onClick={commentSubmit}>
                    publier
                </button>
            </form>
            {errorMsg && (
                <p className="error-message">{errorMsg}</p>
            )}
        </div>
    );
}



export default AddComment;
