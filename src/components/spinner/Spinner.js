import React from 'react';
import styles from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.container}>
      <img alt="" src={require('../../images/ajax-loader.gif')} />
    </div>
  );
}
