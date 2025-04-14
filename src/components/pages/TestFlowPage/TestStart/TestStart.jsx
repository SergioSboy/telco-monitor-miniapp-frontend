import React from 'react';
import styles from './TestStart.module.css';

export default function TestStart({ onStart }) {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={onStart}>
                Начать тест
            </button>
        </div>
    );
}
