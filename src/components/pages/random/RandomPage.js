import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchResult } from '../../../lib/custom-type';
import styles from './Random.module.css';

export default class RandomPage extends Component {
  static propTypes = {
    giphy: SearchResult,
    thumbnailClicked: PropTypes.func.isRequired,
    getRandomGiphy: PropTypes.func.isRequired
  };

  render() {
    const { giphy, thumbnailClicked, getRandomGiphy } = this.props;
    return (
      <div className={styles.container}>
        <div>
          <button className={styles.button} onClick={getRandomGiphy}>
            Next Giphy
          </button>
        </div>
        {giphy && (
          <div>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                thumbnailClicked(giphy);
              }}
            >
              <img src={giphy.thumbnail} alt="" />
            </a>
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.props.getRandomGiphy();
  }
}
