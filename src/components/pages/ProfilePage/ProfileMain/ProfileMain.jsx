import React from "react";
import styles from "./ProfileMain.module.css";
import {useUser} from "../../../../hooks/useUser";
import Preloader from "../../../common/Preloader/Preloader";
import ErrorModal from "../../../common/ErrorModal/ErrorModal"; // создадим его чуть ниже

const ProfileMain = () => {
    const { user, loading, error } = useUser();

    if (loading) return <Preloader />;

    return (
        <main className={styles.main}>
            {error && (
                <ErrorModal>
                    <p>Ошибка при загрузке данных профиля. Повторите попытку позже.</p>
                </ErrorModal>
            )}

            {user && (
                <>
                    <div className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.label}>ФИО</div>
                            <div className={styles.value}>{user.fullName}</div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.label}>Номер телефона</div>
                            <div className={styles.value}>{user.phone}</div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.label}>Подключенный тариф</div>
                            <div className={styles.value}>{user.tariff}</div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.label}>Баланс</div>
                            <div className={styles.value}>{user.balance} ₽</div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.label}>Следующее списание</div>
                            <div className={styles.value}>{user.nextBillingDate}</div>
                        </div>
                        <button className={styles.button}>Пополнить баланс</button>
                    </div>
                </>
            )}
        </main>
    );
};

export default ProfileMain;
