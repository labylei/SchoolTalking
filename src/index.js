import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter,Switch,Route} from 'react-router-dom';

import Nav from './shared/nav/navbar';
import HomePage from './component/Homeage';
import Find from './component/Find';
import nothing from './shared/nothing';
import Person from './component/Person';
import InputWb from './component/InputWb';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <Switch>
          <Route exact path="/" component={nothing} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route path="/find" component={Find} />
          <Route path="/person" component={Person} />
          <Route path="/inpuTWb" component={InputWb} />
        </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById('nav')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
