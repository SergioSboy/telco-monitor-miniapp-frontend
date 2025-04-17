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
});