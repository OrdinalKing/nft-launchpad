import React from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  return (
    <div className={styles.timer}>
      <div className={styles.timerBoxContainer}>
        <p className={styles.timerBox}>23</p>
        <span className={styles.text}>hours</span>
      </div>
      <div className={styles.timerColon}>
        <p>:</p>
      </div>
      <div className={styles.timerBoxContainer}>
        <p className={styles.timerBox}>05</p>
        <span className={styles.text}>mins</span>
      </div>
      <div className={styles.timerColon}>
        <p>:</p>
      </div>
      <div className={styles.timerBoxContainer}>
        <p className={styles.timerBox}>23</p>
        <span className={styles.text}>sec</span>
      </div>
    </div>
  );
};

export default Timer;
