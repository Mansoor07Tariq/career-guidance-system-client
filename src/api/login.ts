import axiosInstance from "src/utils/axiosInstance";

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post('/login/', { email, password });

        // ✅ Check if the cookie was set
        console.log("Login response headers:", response.headers);

        return response.data;
    } catch (error: any) {
        console.error("Login error:", error.response || error);
        throw error.response?.data || "Login failed";
    }
};
