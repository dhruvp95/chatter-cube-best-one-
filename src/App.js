import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Messages from './Messages.js';
import Submit from './Submit.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount () {
    this.getMessages();
    // this.sendMessage();
  }


  getMessages = () => {
    var context = this;
    axios.get('http://chattercube.thirdtape.com/messages')
    .then((results) => {
      console.log(results);
      context.setState({
        messages: results.data.messages
      })
    })
  }

  sendMessage = (message) => {
    axios.post('http://chattercube.thirdtape.com/messages', {
      message: message,
      username: '2Pac'
    })
    .then(() => {
      console.log('Message successfully sent!!!!!!!!!');
    })
    .catch(() => {
      console.log('not sending message', message, '555555');
    })

    this.getMessages();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Submit">
          <Submit sending={this.sendMessage}/>
        </div>
        <div className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. Yoooooooo */}
          <Messages messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

export default App;
