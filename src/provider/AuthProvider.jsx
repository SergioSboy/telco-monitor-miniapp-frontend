import React, { useEffect, useState } from "react";
import { userService } from "../api/userService";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { AuthContext } from "../contexts/AuthContext";
import Preloader from "../components/common/Preloader/Preloader";
import PropTypes from "prop-types";

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);
    const { initDataRaw } = retrieveLaunchParams();

    useEffect(() => {
        setLoading(true);
        userService
            .telegram_login(initDataRaw)
            .then((response) => {
                setUserRole(response.role);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке:", error);
            })
            .finally(() => setLoading(false));
    }, [initDataRaw]);

    if (loading) {
        return <Preloader />;
    }

    return (
        <>
            <AuthContext.Provider value={{ userRole }}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;