import React, {useRef} from 'react';
import uniqid from 'uniqid';

const CommentBox = (props) => {
    const messageInputRef = useRef();

    const addComment = () => {
        props.addComment({message:messageInputRef.current.value,id:uniqid()});
        messageInputRef.current.value = ''; 
    }

    return(
        <div className="commentBox">
            <input ref={messageInputRef} className="input"/>
            <button className="button" onClick={addComment}>
                Post
            </button>
        </div>
    );
};

export default CommentBox;