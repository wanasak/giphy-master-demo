import React from 'react';
import styles from './GiphyDisplay.module.css';
import * as CustomTypes from '../../lib/custom-type';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function GiphyDisplay({ onClick, isShown, giphy }) {
  const containerClassnames = classNames(styles.container, {
    [styles.isShown]: isShown
  });
  console.log(giphy);
  return (
    <div className={containerClassnames} onClick={onClick}>
      <img alt="" className={styles.image} src={giphy ? giphy.full : ''} />
    </div>
  );
}

GiphyDisplay.propTypes = {
  isShown: PropTypes.bool.isRequired,
  giphy: CustomTypes.SearchResult,
  onClick: PropTypes.func.isRequired
};
