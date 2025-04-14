import React from 'react';
import styles from './Header.module.css';

export default function Header({ title, children }) {
    return (
        <header className={styles.header}>
            {children}
            {title}
        </header>
    );
}
