import React, { Component } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SideNav/>
    { this.props.children }
    </div>
    );
  }
}

export default App;
