import React from 'react';
import styles from './RecommendationsPage.module.css';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";
import { useRecommendations } from "../../../hooks/useRecommendations";
import Preloader from "../../common/Preloader/Preloader";
import ErrorModal from "../../common/ErrorModal/ErrorModal";

export default function RecommendationsPage() {
    const { recommendations, loading, error } = useRecommendations();

    if (loading) return <Preloader />;

    return (
        <div className={styles.page}>
            <Header title="Советы по улучшению связи" />

            <main className={styles.main}>
                {error && (
                    <ErrorModal>
                        <p>Не удалось загрузить рекомендации 😥</p>
                    </ErrorModal>
                )}

                {recommendations.map((r, index) => (
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
