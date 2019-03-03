import React from 'react';
import './App.css';
// import SearchForm from '../search-form/SearchFormContainer';
// import SearchResults from './components/search-form/SearchResultsContainer';
import Navigation from '../navigation/NavigationContainer';

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

export default ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);
