import React, {useState} from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import uniqid from "uniqid";

const App = () => {

  let initialMessages = ([
    {message:"I hate CS",id:uniqid()},
    {message:"I hate Math",id:uniqid()},
    {message:"I hate React",id:uniqid()},
    {message:"I hate",id:uniqid()},
  ]);

  const [messages,setMessages] = useState(initialMessages); 

  const addComment = (message) => {
    setMessages(oldMessages => [message,...oldMessages]);
  };

  const deleteComment = (id) => {
    setMessages(messages.filter(comment => comment.id !== id));
  };

  return(
    <div>
      <CommentBox addComment={addComment}/>
      <CommentList messages={messages} deleteComment={deleteComment}/>
    </div>
  );
};

export default App;