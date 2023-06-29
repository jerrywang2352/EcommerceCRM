import React from 'react';
import message from './message.jpg';
import trash from './trash.jpg';

const Comment = (props) => {
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
                    <td className="delete">
                        <img src={trash}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Comment;