// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-10">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to AI Career Guidance
      </h1>
      <p className="text-gray-600">
        Get started with your career guidance now.
      </p>

      <div className="flex space-x-4">
        <button
          onClick={() => router.push('/login')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Login
        </button>
        <button
          onClick={() => router.push('/signup')}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
