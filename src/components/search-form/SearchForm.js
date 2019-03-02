import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ onSearchSubmitted }) {
  let term = null;

  const searchSubmitted = e => {
    e.preventDefault();
    onSearchSubmitted(term.value);
  };

  return (
    <form onSubmit={searchSubmitted}>
      <input ref={e => (term = e)} type="text" placeholder="Search..." />
      <input type="submit" value="Search" />
    </form>
  );
}

SearchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
};
