import React from 'react';
import uniqid from 'uniqid';
import Comment from './Comment';

const CommentList = (props) => {
    const comments = props.messages.map((message) => 
        <Comment key={uniqid()} comment={message}/>
    );

    return(
        <div className="commentList">
            {comments}
        </div>
    );
};

export default CommentList