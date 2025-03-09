import axiosInstance from "src/utils/axiosInstance";

export const getUser = async () => {
    try {
        const response = await axiosInstance.get('/user/', {
            withCredentials: true,  // ✅ Ensures cookies are included in the request
        });

        // ✅ Debug cookies being sent
        console.log("Request Cookies:", document.cookie);

        return response.data;
    } catch (error: any) {
        console.error("Error in getUser.ts:", error.response || error);
        throw error.response?.data || "Failed to fetch user";
    }
};
