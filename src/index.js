import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/App';
import PortfoDetail from './containers/PortfoDetail';
import Login from './containers/Login';
import Register from './containers/Register';
import PortfoList from './containers/PortfoList';
import PortfoWrite from './containers/PortfoWrite';
import Home from './containers/Home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Home" component={Home}/>
        <Route path="Login" component={Login}/>
        <Route path="Register" component={Register}/>
        <Route path="PortfoDetail" component={PortfoDetail}/>
        <Route path="PortfoList" component={PortfoList}/>
        <Route path="PortfoWrite" component={PortfoWrite}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
