import React from 'react';
import message from './message.jpg';
import trash from './trash.jpg';

const Comment = (props) => {
    const deleteComment = () => {
        props.deleteComment(props.index);
    }

    return (
        <table className="comment">
            <tbody>
                <tr>
                    <td className="photo">
                        <img src={message}/>
                    </td>
                    <td className="message">
                        {props.comment}
                    </td>
                    <td className="delete" onClick={deleteComment}>
                        <img src={trash} alt="trash image"/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Comment;