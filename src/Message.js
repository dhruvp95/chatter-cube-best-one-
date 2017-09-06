import React from 'react';

var Message = ({ message }) => (
  <div className="message-entry">
    <br></br>
    Username: {message.username}
    <br></br>
    Message: {message.message}
  </div>
);


export default Message;

