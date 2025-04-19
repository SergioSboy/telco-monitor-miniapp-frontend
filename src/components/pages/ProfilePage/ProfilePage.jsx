import React from 'react';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";
import styles from './ProfilePage.module.css';
import ProfileMain from "./ProfileMain/ProfileMain";

const ProfilePage = () => {
    return (
        <div>
            <Header className={styles.header}>Профиль пользователя</Header>
            <ProfileMain />
            <BottomNav />
        </div>
    );
};

export default ProfilePage;
