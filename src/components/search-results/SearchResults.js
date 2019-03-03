import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-type';
import SearchResult from '../search-result/SearchResult';

export default function SearchResults({ results }) {
  return (
    <div>
      {results.map(result => (
        <SearchResult result={result} />
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult)
};