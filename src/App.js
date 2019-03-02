import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/search-form/SearchFormContainer';
import SearchResults from './components/search-form/SearchResultsContainer';

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

class App extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}

export default App;
