import React, {useState} from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

const App = () => {

  let initialMessages = ([
    "I hate CS",
    "I'm going to kill myself",
    "fuck my life",
    "please make the pain go away :("
  ]);

  const [messages,setMessages] = useState(initialMessages); 

  const addComment = (message) => {
    setMessages(oldMessages => [message,...oldMessages])
    console.log(messages)
  }

  return(
    <div>
      <CommentBox addComment={addComment}/>
      <CommentList messages={messages}/>
    </div>
  );
};

export default App;