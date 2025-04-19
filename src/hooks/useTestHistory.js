import { useEffect, useState } from "react";
import { userService } from "../api/userService";

export const useTestHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        userService
            .getConnectionTests()
            .then(setHistory)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { history, loading, error };
};
