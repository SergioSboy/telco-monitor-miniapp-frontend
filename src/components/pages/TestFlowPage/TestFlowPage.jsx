import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HistoryIcon } from './../../../assets/icons/history.svg';
import { ReactComponent as RecommendationIcon } from './../../../assets/icons/reccomendation.svg';

import styles from './TestFlowPage.module.css';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";
import TestStart from "./TestStart/TestStart";
import TestLoader from "./TestLoader/TestLoader";
import TestResult from "./TestResult/TestResult";
import useSpeedTest from "../../../hooks/useSpeedTest";

export default function TestFlowPage() {
    const [step, setStep] = useState('initial'); // Убираем типизацию
    const navigate = useNavigate();

    const { runTest, result, error } = useSpeedTest();

    const startTest = async () => {
        setStep('loading');
        await runTest();  // запуск теста
        setStep('done');  // после завершения теста меняем шаг на 'done'
    };

    return (
        <div className={styles.page}>
            <Header title={
                step === 'done' ? 'Результаты теста' :
                    step === 'loading' ? 'Идёт проверка' : 'Проверка сети'
            } />

            <main className={styles.main}>
                {step === 'initial' && (
                    <button
                        className={styles.historyButton}
                        onClick={() => navigate('/history')}
                        aria-label="История"
                    >
                        <HistoryIcon />
                    </button>
                )}

                {step === 'initial' && <TestStart onStart={startTest} />}
                {step === 'loading' && <TestLoader />}
                {step === 'done' && result && <TestResult result={result} />}
                {step === 'done' && error && <p>{error}</p>}

                {step === 'initial' && (
                    <button
                        className={styles.recommendationButton}
                        onClick={() => navigate('/recommendations')}
                        aria-label="Рекомендации"
                    >
                        <RecommendationIcon />
                    </button>
                )}
            </main>

            <BottomNav />
        </div>
    );
}
