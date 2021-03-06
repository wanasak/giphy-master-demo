import 'babel-regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { createLogger } from 'redux-logger';
import searchSaga from './sagas/search';
import randomSaga from './sagas/random';
import createSagaMiddleware from 'redux-saga';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/app/AppContainer';
import SearchPageContainer from './components/pages/search/SearchContainer';
import RandomContainer from './components/pages/random/RandomContainer';
import TrendingContainer from './components/pages/trending/TrendingContainer';

const sagas = createSagaMiddleware();
const history = createBrowserHistory();

const store = createStore(
  reducer,
  applyMiddleware(routerMiddleware(history), createLogger(), sagas)
);

sagas.run(searchSaga);
sagas.run(randomSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={SearchPageContainer} />
        <Route path="/trending" component={TrendingContainer} />
        <Route path="/random" component={RandomContainer} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
