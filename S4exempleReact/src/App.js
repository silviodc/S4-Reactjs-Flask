import React, { Component } from 'react';
import Tweet from './Tweet.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tweets: []
    }
    this.loadData()
  }

  loadData (path) {
  //
  window.fetch('http://127.0.0.1:5000/tweets/GottaGetEmAll')
//  window.fetch('./data/exemple.json')
    .then(res => {
      console.log(res);
      return res.json()
    })
    .then(res => {
      this.setState( { tweets: res.tweets });

    })
    .catch(error => console.error('Error:', error))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to this React example</h1>
        </header>
        <main>
          {
            this.state.tweets.map((tweet, i) => {
              return <Tweet author = { tweet.author } text = { tweet.text } key = { 'tweet'+ i } />
            })
          }
        </main>
      </div>
    );
  }
}

export default App;
