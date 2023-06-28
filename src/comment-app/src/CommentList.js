import React from 'react';
import uniqid from 'uniqid';
import Comment from './Comment';

const CommentList = () => {
    return(
        <div className="commentList">
            <Comment key={uniqid()}/>
        </div>
    );
};

export default CommentList