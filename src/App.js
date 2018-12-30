import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login/Login'
import Signup from './Signup/Signup'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Signup' component={Signup} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
