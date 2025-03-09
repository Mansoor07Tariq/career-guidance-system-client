'use client';  // ✅ Ensure it's a client component

import '../styles/global.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from 'src/api/getUser';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string; profilePic?: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("User not logged in");
      }
    };

    fetchUser();
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-700 cursor-pointer" onClick={() => router.push('/')}>
            AI Career Guidance
          </h1>

          {user ? (
            <img
              src={user.profilePic || "https://via.placeholder.com/40"} // Default if no profile picture
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => router.push('/dashboard')}
            />
          ) : (
            <div className="space-x-4">
              <button onClick={() => router.push('/login')} className="text-blue-500">Login</button>
              <button onClick={() => router.push('/signup')} className="text-green-500">Sign Up</button>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
