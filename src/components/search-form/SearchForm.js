import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default function SearchForm({ onSearchSubmitted }) {
  let term = null;

  const searchSubmitted = e => {
    e.preventDefault();
    onSearchSubmitted(term.value);
  };

  return (
    <form className={styles.container} onSubmit={searchSubmitted}>
      <input
        className={styles.searchField}
        ref={e => (term = e)}
        type="text"
        placeholder="Search..."
      />
      <input className={styles.button} type="submit" value="Search" />
    </form>
  );
}

SearchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
};
