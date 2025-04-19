import React from 'react';
import styles from './TestHistoryPage.module.css';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";
import Preloader from "../../common/Preloader/Preloader";
import { useTestHistory } from "../../../hooks/useTestHistory";
import ErrorModal from "../../common/ErrorModal/ErrorModal";

export default function TestHistoryPage() {
    const { history, loading, error } = useTestHistory();

    if (loading) return <Preloader />;

    return (
        <div className={styles.page}>
            <Header title="История измерений" />

            <main className={styles.main}>
                {error && (
                    <ErrorModal>
                        <p>Не удалось загрузить историю измерений 😢</p>
                    </ErrorModal>
                )}

                {history.map((test, index) => (
                    <div key={index} className={styles.entry}>
                        <div className={styles.row}>
                            <span className={styles.label}>Ping:</span>
                            <span className={styles.value}>{test.ping} мс</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Download:</span>
                            <span className={styles.value}>{test.download} Мбит/с</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Upload:</span>
                            <span className={styles.value}>{test.upload} Мбит/с</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Адрес:</span>
                            <span className={styles.value}>{test.address}</span>
                        </div>
                        <div className={styles.date}>{test.date}</div>
                    </div>
                ))}
            </main>

            <BottomNav />
        </div>
    );
}
