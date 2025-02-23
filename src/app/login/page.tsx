"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset errors

    if (!email.includes("@") || password.length < 6) {
      setTimeout(() => {
        setError("Invalid email or password (min 6 chars)");
      }, 0);
      return;
    }

    // Simulate login process
    setTimeout(() => {
      alert("Login Successful!");
      router.push("/");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl animate-fadeIn">
      <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

      {error && <p data-testid="error-message" className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
      </form>

      <p className="text-sm text-center text-gray-600">
        Don't have an account?{" "}
        <button onClick={() => router.push("/signup")} className="text-blue-500 hover:underline">
          Sign up
        </button>
      </p>
    </div>
  );
}
