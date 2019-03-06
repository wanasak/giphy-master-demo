import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../search-results/SearchResultsContainer';
import SearchForm from '../../search-form/SearchForm';
import InfiniteScroll from '../../infinite-scroll/InfiniteScroll';

export default function Search({
  onSearchSubmitted,
  onInfiniteScroll,
  isActive,
  isLoading
}) {
  return (
    <div>
      <SearchForm onSearchSubmitted={onSearchSubmitted} />
      <InfiniteScroll
        isActive={isActive}
        isLoading={isLoading}
        onTrigger={() => onInfiniteScroll()}
      >
        <SearchResults />
      </InfiniteScroll>
    </div>
  );
}

Search.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired
};
