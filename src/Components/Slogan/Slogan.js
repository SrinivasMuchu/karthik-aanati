import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <section className={styles.sloganSection}>
      <div className={styles.sloganOverlay} />
      <div className={styles.sloganText}>
        Where accuracy meets integrity<br/> we count what truly counts.
      </div>
    </section>
  );
}

export default Slogan;