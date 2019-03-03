import React from 'react';
import SearchResults from '../../search-results/SearchResultsContainer';
import SearchForm from '../../search-form/SearchFormContainer';

export default function Search() {
  return (
    <div>
      <SearchForm />
      <SearchResults />
    </div>
  );
}
