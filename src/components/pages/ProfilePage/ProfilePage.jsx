import React from 'react';
import Header from "../../common/Header/Header";
import BottomNav from "../../common/BottomNav/BottomNav";
import ProfileMain from "./ProfileMain/ProfileMain";
import styles from "../RecommendationsPage/RecommendationsPage.module.css";

const ProfilePage = () => {
    return (
        <div className={styles.page}>
            <Header title={'Профиль'}></Header>
            <ProfileMain />
            <BottomNav />
        </div>
    );
};

export default ProfilePage;
