import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    const comments = props.messages.map((comment) => { 
        return <Comment key={comment.id} index={comment.id} comment={comment.message} deleteComment={props.deleteComment}/>;
    });

    return(
        <div className="commentList">
            {comments}
        </div>
    );
};

export default CommentList