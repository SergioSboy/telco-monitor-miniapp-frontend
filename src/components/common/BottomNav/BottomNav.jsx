import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './BottomNav.module.css';

const navItems = [
    { label: 'Связь', path: '/' },
    { label: 'Жалобы', path: '/complaints' },
    { label: 'История', path: '/history' },
    { label: 'Советы', path: '/recommendations' },
];

export default function BottomNav() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className={styles.nav}>
            {navItems.map(item => (
                <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`${styles.btn} ${location.pathname === item.path ? styles.active : ''}`}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
}
