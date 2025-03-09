'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { logoutUser } from 'src/api/logout';
import { getUser } from 'src/api/getUser';

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<{ name: string; email: string; profilePic?: string } | null>(null);
    const [loadingUser, setLoadingUser] = useState(true); // ✅ Loading state for fetching user
    const [loadingLogout, setLoadingLogout] = useState(false); // ✅ Loading state for logout

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUser();
                setUser(userData);
            } catch (error) {
                console.error('Failed to fetch user:', error);
                router.push('/login');
            } finally {
                setLoadingUser(false); // ✅ Hide user loading state
            }
        };

        fetchUser();
    }, [router]);

    const handleLogout = async () => {
        setLoadingLogout(true); // ✅ Show logout loading state

        try {
            await logoutUser();
            document.cookie = "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            // ✅ Wait for 2 seconds before redirecting
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="flex">
            {/* Main Dashboard Content */}
            <div className="flex-1 p-6">
                <h2 className="text-3xl font-bold text-gray-700">Dashboard</h2>

                {loadingUser ? (
                    <div className="flex justify-center items-center mt-6">
                        <span className="animate-spin h-6 w-6 border-2 border-gray-400 border-t-transparent rounded-full mr-2"></span>
                        <p className="text-gray-500">Loading user...</p>
                    </div>
                ) : user ? (
                    <div className="mt-4">
                        <p className="text-lg text-gray-600">
                            Welcome, <span className="font-semibold">{user.name}</span>
                        </p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                ) : (
                    <p className="text-gray-500">No user data found.</p>
                )}
            </div>

            {/* Right Sidebar */}
            <aside className="w-64 bg-white shadow-md p-4 h-screen">
                <div className="text-center mb-6">
                    <img
                        src={user?.profilePic || "https://via.placeholder.com/80"}
                        alt="Profile"
                        className="w-20 h-20 rounded-full mx-auto"
                    />
                    <h3 className="mt-2 text-lg font-semibold text-gray-700">{user?.name}</h3>
                </div>

                {/* Sidebar Menu */}
                <ul className="space-y-4">
                    <li>
                        <button onClick={() => router.push('/dashboard')} className="w-full text-left text-gray-700 hover:text-blue-500">
                            🏠 Dashboard
                        </button>
                    </li>
                    <li>
                        <button onClick={() => router.push('/recommendations')} className="w-full text-left text-gray-700 hover:text-blue-500">
                            🎯 Recommendations
                        </button>
                    </li>
                    <li>
                        <button onClick={() => router.push('/roadmap')} className="w-full text-left text-gray-700 hover:text-blue-500">
                            📍 Roadmap
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center text-left text-red-500 hover:text-red-600"
                            disabled={loadingLogout} // ✅ Disable button while logging out
                        >
                            {loadingLogout ? (
                                <>
                                    <span className="animate-spin h-5 w-5 border-2 border-red-500 border-t-transparent rounded-full mr-2"></span>
                                    Logging out...
                                </>
                            ) : (
                                '🚪 Logout'
                            )}
                        </button>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
