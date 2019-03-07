import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-type';
import SearchResult from '../search-result/SearchResult';
import styles from './SearchResults.module.css';

export default function SearchResults({ results, searchResultClicked }) {
  return (
    <div className={styles.container}>
      {results.map(result => (
        <SearchResult
          key={result.id}
          result={result}
          onClick={() => searchResultClicked(result)}
        />
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult),
  searchResultClicked: PropTypes.func.isRequired
};
