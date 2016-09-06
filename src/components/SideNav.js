import React, { Component } from 'react';

class SideNav extends Component {
  render() {
    return (
      <div>
      <div className="ui black big launch right attached fixed button">
  <i className="content icon"></i>
</div>
      <div className="ui left vertical inverted labeled icon sidebar menu">
  <a className="item">
    <i className="home icon"></i>
    Home
  </a>
  <a className="item">
    <i className="block layout icon"></i>
    Topics
  </a>
  <a className="item">
    <i className="smile icon"></i>
    Friends
  </a>
  <a className="item">
    <i className="calendar icon"></i>
    History
  </a>
  <a className="item">
    <i className="mail icon"></i>
    Messages
  </a>
  <a className="item">
    <i className="chat icon"></i>
    Discussions
  </a>
  <a className="item">
    <i className="trophy icon"></i>
    Achievements
  </a>
  <a className="item">
    <i className="shop icon"></i>
    Store
  </a>
  <a className="item">
    <i className="settings icon"></i>
    Settings
  </a>
</div>
</div>
    );
  }
}

export default SideNav;
