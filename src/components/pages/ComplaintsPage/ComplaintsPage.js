import React, { useState } from 'react';
import styles from './ComplaintsPage.module.css';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";

const complaintTypes = [
    { value: 'no_signal', label: 'Нет сигнала' },
    { value: 'slow_internet', label: 'Медленный интернет' },
    { value: 'drops', label: 'Периодические обрывы' },
    { value: 'high_ping', label: 'Высокий пинг' },
];

const mockComplaints = [
    {
        type: 'Нет сигнала',
        status: 'pending',
        date: '10 апр, 14:32',
    },
    {
        type: 'Медленный интернет',
        status: 'closed',
        date: '08 апр, 17:20',
    },
];

export default function ComplaintsPage() {
    const [type, setType] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // здесь будет отправка на сервер
        alert('Жалоба отправлена!');
        setType('');
        setComment('');
    };

    return (
        <div className={styles.page}>
            <Header title="Оставить жалобу" />

            <main className={styles.main}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="type">Тип проблемы</label>
                    <select id="type" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="">Выберите проблему</option>
                        {complaintTypes.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="comment">Комментарий</label>
                    <textarea
                        id="comment"
                        placeholder="Опишите, что произошло..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <button type="submit" className={styles.submitBtn}>
                        Отправить
                    </button>
                </form>

                <h3 className={styles.sectionTitle}>История обращений</h3>
                {mockComplaints.map((c, idx) => (
                    <div key={idx} className={styles.complaintItem}>
                        <div className={styles.complaintMain}>
                            <span className={styles.complaintType}>{c.type}</span>
                            <span
                                className={`${styles.status} ${
                                    c.status === 'pending' ? styles.pending : styles.closed
                                }`}
                            >
                {c.status === 'pending' ? 'На рассмотрении' : 'Закрыта'}
              </span>
                        </div>
                        <div className={styles.date}>{c.date}</div>
                    </div>
                ))}
            </main>

            <BottomNav />
        </div>
    );
}
