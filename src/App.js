import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './css/login/login.scss';
import {Button} from 'reactstrap';
import Login from './component/Login.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>ddd</Button>
      </header>
      <Login />
    </div>
  );
}

export default App;
