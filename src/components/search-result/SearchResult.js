import React from 'react';
import * as CustomTypes from '../../lib/custom-type';
import PropTypes from 'prop-types';

export default function SearchResult({ result, onClick }) {
  const { thumbnail } = result;
  const clicked = e => {
    e.preventDefault();
    onClick();
  };
  return (
    <a href="#" onClick={clicked}>
      <img src={thumbnail} alt="img" />
    </a>
  );
}

SearchResult.propTypes = {
  result: CustomTypes.SearchResult.isRequired,
  onClick: PropTypes.func.isRequired
};
