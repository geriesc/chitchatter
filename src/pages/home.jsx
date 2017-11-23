import React, {Component} from 'react';

class Home extends Component{
    state = {
      username: "",
      room: ""
    }
    render(){
        return(
            
            <div>
         <header className="App-header">
          <img src="https://image.ibb.co/gvqtiR/logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">ChitChat</h1>
            </header>
         <br /><p className="App-intro">
          Talk exclusively to the ones who matter. 
          <br />Come and ChitChat. <br /><br />
         </p>
                <div className="container">
                    <p>Join a Chatroom</p>
                    <form>
               
                        <div className="form-inputs">
                            <input 
                            onChange={(ev) => this.setState({ username: ev.target.value })}
                            type="text" name="username" placeholder="username"/>
                        </div>
                        <br />
                        <div className="form-inputs">
                            <input type="text" name="chatroomname" 
                            onChange={(ev) => this.setState({room: ev.target.value})}
                            placeholder="chatroom-name"/>
                        </div>
                        <br />
                        <input type="submit" name="submit" value="Enter Room" onClick={(e)=>{
                            this.props.history.push('/chatroom')
                            this.props.login(this.state.username, this.state.room)
                            e.preventDefault()
                        }} />
                    </form>
                    </div>
                </div>
        )
    }
}

export default Home;