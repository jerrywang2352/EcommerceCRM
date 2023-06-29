import React, {useRef} from 'react';

const CommentBox = (props) => {
    const messageInputRef = useRef(null);

    const addComment = () => {
        props.addComment(messageInputRef.current.value);
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