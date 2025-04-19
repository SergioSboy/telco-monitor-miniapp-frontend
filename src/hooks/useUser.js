import { useEffect, useState } from "react";
import { userService } from "../api/userService";

export const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        userService
            .getProfile()
            .then((data) => setUser(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { user, loading, error };
};
