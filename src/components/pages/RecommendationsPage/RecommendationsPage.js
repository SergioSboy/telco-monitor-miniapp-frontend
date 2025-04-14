import React from 'react';
import styles from './RecommendationsPage.module.css';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";

const mockRecommendations = [
    {
        text: 'Переключитесь с 5G на 4G — в перегруженных районах 4G может быть стабильнее.',
        link: '#',
    },
    {
        text: 'Включите и выключите режим полёта, чтобы перезапустить соединение.',
    },
    {
        text: 'Проверьте наличие системных обновлений и прошивок модема.',
        link: '#',
    },
    {
        text: 'Переместитесь ближе к окну или на открытую местность для улучшения сигнала.',
    },
];

export default function RecommendationsPage() {
    return (
        <div className={styles.page}>
            <Header title="Советы по улучшению связи" />

            <main className={styles.main}>
                {mockRecommendations.map((r, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.text}>{r.text}</div>
                        {r.link && (
                            <a className={styles.link} href={r.link}>
                                Подробнее
                            </a>
                        )}
                    </div>
                ))}
            </main>

            <BottomNav />
        </div>
    );
}
