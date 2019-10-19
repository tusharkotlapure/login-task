
import React, { Component } from 'react';
import If from '../../components/If';
import Login from '../../components/Login';
import Dashbord from '../../components/Dashbord';
import './App.css';

class App extends Component {
  state={
    isLoggedIn: false,
  };
  render() {
    const isLoggedIn = window.localStorage.getItem('loggedIn') || this.state.isLoggedIn;

    return (
      <div className="container-fluid">
        <If condition={!isLoggedIn}>
          <Login callBack={(isLoggedIn) => this.setState({ isLoggedIn })} />
        </If>
        <If condition={isLoggedIn}>
          <Dashbord />
        </If>
      </div>
    );
  }
}
export default App;
