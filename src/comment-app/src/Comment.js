import React from 'react';
import message from './message.jpg';
import trash from './trash.jpg';

const Comment = () => {
    return (
        <table className="comment">
            <tbody>
                <tr>
                    <td className="photo">
                        <img src={message}/>
                    </td>
                    <td className="message">
                        Here are where messages go.
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