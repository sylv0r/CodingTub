import { useEffect } from 'react';
import React, { useState } from 'react';
import './comment.scss';


function Comment(props) {
        const [reversedComments, setReversedComments] = useState([]);
      
        useEffect(() => {
          setReversedComments([...props.comments].reverse());
        }, [props.comments]);
      
        const formatDate = (date) => {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          return new Date(date).toLocaleDateString('fr-FR', options);
        };
      
        const formatTime = (date) => {
          const options = { hour: 'numeric', minute: 'numeric', hour12: false };
          return new Date(date).toLocaleTimeString('fr-FR', options);
        };
      
        return (
          <div className="comment_all">
            {reversedComments.map((comment) => (
              <div key={comment.id} className='comment_unique'>
                    <div id='pseudo_datetime_comment'>
                        <p className="pseudo_comment">{comment.pseudo}: </p>
                        <p className="content_comment">{comment.comment}</p>
                    </div>
                        <p className="datetime_comment" data-date={formatDate(comment.datetime_comment) + " à " + formatTime(comment.datetime_comment)}></p>
              </div>
            ))}
            <br />
          </div>
        );
      }
      

export default Comment;
