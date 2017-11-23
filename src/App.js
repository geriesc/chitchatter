import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from "./pages/home";
import ChatRoom from "./pages/chatroom";

class App extends Component {
  state = {
    username: "",
    room: ""
  }

  login = (username, room) => {
    this.setState({username, room})
  }

  render() {
    return (
      <div className="App">
      
        <Switch>
          <Route path="/chatroom" render={(locationProps) => (
            <ChatRoom {...locationProps} 
              username={this.state.username} 
              room={this.state.room}/>
          )}/>
          <Route path="/" render={(locationProps) => (
            <Home {...locationProps} login={this.login}/>
        )}/>
        </Switch>
        
      </div>  
    );
  }
}

export default App;
