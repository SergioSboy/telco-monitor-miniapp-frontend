import React from 'react';
import styles from './TestHistoryPage.module.css';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";

// Пример мок-данных, потом заменим на API
const mockData = [
    {
        ping: 42,
        download: 35.6,
        upload: 8.2,
        address: 'Москва, ул. Тверская, 10',
        date: '10 апр, 14:23',
    },
    {
        ping: 88,
        download: 6.2,
        upload: 1.5,
        address: 'Санкт-Петербург, Невский проспект, 55',
        date: '08 апр, 19:10',
    },
];

export default function TestHistoryPage() {
    return (
        <div className={styles.page}>
            <Header title="История измерений" />

            <main className={styles.main}>
                {mockData.map((test, index) => (
                    <div key={index} className={styles.entry}>
                        <div className={styles.row}><span className={styles.label}>Ping:</span><span className={styles.value}>{test.ping} мс</span></div>
                        <div className={styles.row}><span className={styles.label}>Download:</span><span className={styles.value}>{test.download} Мбит/с</span></div>
                        <div className={styles.row}><span className={styles.label}>Upload:</span><span className={styles.value}>{test.upload} Мбит/с</span></div>
                        <div className={styles.row}><span className={styles.label}>Адрес:</span><span className={styles.value}>{test.address}</span></div>
                        <div className={styles.date}>{test.date}</div>
                    </div>
                ))}
            </main>

            <BottomNav />
        </div>
    );
}