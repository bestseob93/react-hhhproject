import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui card">
    <div className="image">
      <img src="http://semantic-ui.com/images/avatar2/large/kristy.png"/>
    </div>
    <div className="content">
      <a className="header">App</a>
      <div className="meta">
        <span className="date">Joined in 2013</span>
      </div>
      <div className="description">
        containers - App
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="user icon"></i>
        22 Friends
      </a>
    </div>
  </div>
    </div>
    );
  }
}

export default App;
