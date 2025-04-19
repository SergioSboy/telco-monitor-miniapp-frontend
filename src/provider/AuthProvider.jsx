import React, { useEffect, useState } from "react";
import { userService } from "../api/userService";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { AuthContext } from "../contexts/AuthContext";
import Preloader from "../components/common/Preloader/Preloader";
import PropTypes from "prop-types";

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { initDataRaw } = retrieveLaunchParams();

    useEffect(() => {
        setLoading(true);
        userService
            .telegram_login(initDataRaw)
            .then(() => {
                setIsAuthenticated(true); // успешно прошёл проверку
            })
            .catch((error) => {
                setIsAuthenticated(false);
                console.error("Ошибка при загрузке:", error);
            })
            .finally(() => setLoading(false));
    }, [initDataRaw]);

    if (loading) {
        return <Preloader />;
    }

    return (
            <AuthContext.Provider value={{ isAuthenticated }}>
                {children}
            </AuthContext.Provider>

    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;