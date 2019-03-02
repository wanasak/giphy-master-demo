import React from 'react';
import * as CustomTypes from '../../lib/custom-type';

export default function SearchResult({ result }) {
  const { thumbnail } = result;
  return <img src={thumbnail} alt="img" />;
}

SearchResult.propTypes = {
  result: CustomTypes.SearchResult.isRequired
};
