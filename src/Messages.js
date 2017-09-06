import React from 'react';
import Message from './Message.js';
// import axios from 'axios';

var Messages = ({ messages }) => (
  <div className="messages"> 
    {messages.map((message, i) => (<Message message={message} key={i}/>) )}
  </div>
)


export default Messages;