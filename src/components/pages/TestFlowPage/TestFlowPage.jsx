import React, { useState } from 'react';

import styles from './TestFlowPage.module.css';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";
import TestStart from "./TestStart/TestStart";
import TestLoader from "./TestLoader/TestLoader";
import TestResult from "./TestResult/TestResult";

export default function TestFlowPage() {
    const [step, setStep] = useState('initial');
    const [result, setResult] = useState(null);

    const startTest = () => {
        setStep('loading');
        setTimeout(() => {
            setResult({ ping: 42, download: 35.6, upload: 8.2 });
            setStep('done');
        }, 3000);
    };

    return (
        <div className={styles.page}>
            <Header title={
                step === 'done' ? 'Результаты теста' :
                    step === 'loading' ? 'Идёт проверка' : 'Проверка сети'
            } />

            <main className={styles.main}>
                {step === 'initial' && <TestStart onStart={startTest} />}
                {step === 'loading' && <TestLoader />}
                {step === 'done' && result && <TestResult result={result} />}
            </main>

            <BottomNav />
        </div>
    );
}
