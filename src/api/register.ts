import axiosInstance from "src/utils/axiosInstance";

export const registerUser = async (name: string, email: string, password: string) => {
    try {
        const response = await axiosInstance.post('/register/', { name, email, password });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || "Signup failed";
    }
};
