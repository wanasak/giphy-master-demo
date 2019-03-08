import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../search-results/SearchResultsContainer';
import InfiniteScroll from '../../infinite-scroll/InfiniteScroll';

export default class Search extends React.Component {
  render() {
    const { onInfiniteScroll, isActive, isLoading } = this.props;
    return (
      <div>
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

  componentDidMount() {
    this.props.onSearchSubmitted();
  }
}

Search.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired
};
