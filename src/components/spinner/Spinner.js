import React from 'react';
import styles from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.container}>
      <img alt="" src="/images/ajax-loader.gif" />
    </div>
  );
}
