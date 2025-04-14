import React from 'react';
import styles from './TestResult.module.css';

export default function TestResult({ result }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.summary}>Связь отличная 🎉</div>

            <div className={styles.metrics}>
                <div className={`${styles.metric} ${styles.good}`}>
                    <div className={styles.metricTitle}>Скорость загрузки</div>
                    <div className={styles.metricValue}>{result.download} Мбит/с</div>
                </div>
                <div className={`${styles.metric} ${styles.good}`}>
                    <div className={styles.metricTitle}>Скорость отдачи</div>
                    <div className={styles.metricValue}>{result.upload} Мбит/с</div>
                </div>
                <div className={`${styles.metric} ${styles.medium}`}>
                    <div className={styles.metricTitle}>Пинг</div>
                    <div className={styles.metricValue}>{result.ping} мс</div>
                </div>
            </div>

            <div className={styles.advice}>
                Для лучшего сигнала — оставайтесь в зоне покрытия 4G или переключитесь в 3G в загруженных местах.
            </div>
        </div>
    );
}
