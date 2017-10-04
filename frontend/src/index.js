import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Bins from './components/Bins'
import Bin from './components/Bin'
import CreateBin from './components/CreateBin'
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route component={ Home } path="/" exact />
      <Route component={ Bins } path="/bins/:id" />
      <Route component={ Bin } path="/bin/:id" />
      <Route component={ CreateBin } path="/create/:id" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
