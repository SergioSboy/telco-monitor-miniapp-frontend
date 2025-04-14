import React, { useState } from 'react';
import styles from './ChatPage.module.css';
import Header from "../../common/Header/Header";

const mockMessages = [
    { from: 'support', text: 'Спасибо за обращение! Мы уточняем ситуацию с сетью в вашем районе.', time: '10 апр, 14:33' },
    { from: 'user', text: 'Уже третий день нет связи возле дома.', time: '10 апр, 14:34' },
    { from: 'support', text: 'Мы передали данные техническим специалистам.', time: '10 апр, 14:35' },
];

export default function ChatPage() {
    const [messages, setMessages] = useState(mockMessages);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessage = {
            from: 'user',
            text: input,
            time: new Date().toLocaleString('ru-RU', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
        };
        setMessages([...messages, newMessage]);
        setInput('');
    };

    return (
        <div className={styles.page}>
            <Header className={styles.header}>
                Жалоба: Нет сигнала
            </Header>

            <main className={styles.chat}>
                {messages.map((msg, index) => (
                    <div key={index} className={`${styles.message} ${msg.from === 'user' ? styles.user : styles.support}`}>
                        <div>{msg.text}</div>
                        <div className={styles.time}>{msg.time}</div>
                    </div>
                ))}
            </main>

            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder="Ваше сообщение..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleSend}>Отправить</button>
            </div>
        </div>
    );
}
