import React from 'react';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
    return (
        <div>
            <Header className={styles.header}>
                Профиль пользователя
            </Header>
            <main className={styles.main}>
                <div className={styles.card}>
                    <div className={styles.row}>
                        <div className={styles.label}>ФИО</div>
                        <div className={styles.value}>Иванов Иван Иванович</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Номер телефона</div>
                        <div className={styles.value}>+7 999 123-45-67</div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.row}>
                        <div className={styles.label}>Подключенный тариф</div>
                        <div className={styles.value}>Гигабезлимит</div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.row}>
                        <div className={styles.label}>Баланс</div>
                        <div className={styles.value}>120 ₽</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Следующее списание</div>
                        <div className={styles.value}>25 апреля</div>
                    </div>
                    <button className={styles.button}>Пополнить баланс</button>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default ProfilePage;