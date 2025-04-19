import axiosInstance from "../axiosInstance";

export const userService = Object.freeze({
    telegram_login: async (initData) => {
        const response = await axiosInstance.post(
            "/telegram_login",
            {
                initData,
            },
            { withCredentials: true },
        );
        return response.data;
    },

    getProfile: async () => {
        const response = await axiosInstance.get("/me", { withCredentials: true });
        return response.data;
    },

    getConnectionTests: async () => {
        const response = await axiosInstance.get("/connection_tests", {
            withCredentials: true,
        });
        return response.data;
    },

    getRecommendations: async () => {
        const response = await axiosInstance.get("/recommendations", {
            withCredentials: true,
        });
        return response.data;
    },
});