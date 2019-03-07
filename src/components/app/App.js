import React from 'react';
// import SearchForm from '../search-form/SearchFormContainer';
// import SearchResults from './components/search-form/SearchResultsContainer';
import Navigation from '../navigation/NavigationContainer';
import GiphyDisplay from '../giphy-display/GiphyDisplay';
import PropTypes from 'prop-types';
import { SearchResult } from '../../lib/custom-type';

// const results = [
//   {
//     thumbnail: 'https://media0.giphy.com/media/QKBkck4ATQuicTviby/200_s.gif',
//     full: 'https://media0.giphy.com/media/QKBkck4ATQuicTviby/giphy.gif'
//   },
//   {
//     thumbnail: 'https://media3.giphy.com/media/5z3XmEZfQZ5xlS5fXp/200_s.gif',
//     full: 'https://media3.giphy.com/media/5z3XmEZfQZ5xlS5fXp/giphy.gif'
//   }
// ];

const App = ({
  children,
  giphyDisplayIsShown,
  giphyDisplayed,
  hideGiphyDisplay
}) => (
  <div>
    {/* <h1 className={styles.header}>Giphy Master</h1> */}
    <Navigation />
    {children}
    <GiphyDisplay
      isShown={giphyDisplayIsShown}
      onClick={hideGiphyDisplay}
      giphy={giphyDisplayed}
    />
  </div>
);

App.propTypes = {
  giphyDisplayIsShown: PropTypes.bool.isRequired,
  giphyDisplayed: SearchResult,
  hideGiphyDisplay: PropTypes.func.isRequired
};

export default App;
