import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../search-results/SearchResultsContainer';
import SearchForm from '../../search-form/SearchForm';
import InfiniteScroll from '../../infinite-scroll/InfiniteScroll';

export default function Search({ onSearchSubmitted, onInfiniteScroll }) {
  return (
    <div>
      <SearchForm onSearchSubmitted={onSearchSubmitted} />
      <InfiniteScroll isLoading={false} onTrigger={() => onInfiniteScroll()}>
        <SearchResults />
      </InfiniteScroll>
    </div>
  );
}

Search.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired
};
