import axiosInstance from "src/utils/axiosInstance";

export const logoutUser = async () => {
    try {
        const response = await axiosInstance.post('/logout/');
        return response.data;
    } catch (error: any) {
        throw error.response?.data || "Logout failed";
    }
};
