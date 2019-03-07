import { combineReducers } from 'redux';
import searchReducer from './search';
import giphyDisplayReducer from './giphy-display';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  router: routerReducer,
  search: searchReducer,
  giphyDisplay: giphyDisplayReducer
});
