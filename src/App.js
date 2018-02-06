import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
    this.getUsers = this.getUsers.bind(this);
  }
  getUsers(){
    let promise = axios.get('https://swapi.co/api/people/');
    promise.then(response => {
      this.setState({
        users: response.data.results
      });
    });
  }
  render() {
    let formattedUsers = this.state.users.map((element, index) => {
      return <p key={index + element.name}>{element.name}</p>;
    });
    return (
      <div className="App">
        <h1>Users</h1>
        <button onClick={this.getUsers}>Get Users</button>
        {formattedUsers}
      </div>
    );
  }
}

export default App;