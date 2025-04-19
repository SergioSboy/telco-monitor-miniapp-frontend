import { useEffect, useState } from "react";
import { userService } from "../api/userService";

export const useRecommendations = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        userService
            .getRecommendations()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { recommendations: data, loading, error };
};
