import React from 'react';
import styles from './TestLoader.module.css';

export default function TestLoader() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner}></div>
            <div className={styles.status}>Проверяем скорость сети...</div>
            <div className={styles.note}>Это займёт всего несколько секунд</div>
        </div>
    );
}
