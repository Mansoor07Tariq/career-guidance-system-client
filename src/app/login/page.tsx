'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { validateLoginForm } from '../../utils/validation';
import { loginUser } from 'src/api/login';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);

    // Clear error dynamically as user types
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateLoginForm(email, password, setErrors)) return;

    setLoading(true); // ✅ Show loading state
    try {
      await loginUser(email, password);
      router.push('/dashboard'); // Redirect to Dashboard
    } catch (err: any) {
      setErrors((prev) => ({ ...prev, email: err.email || 'Invalid credentials' }));
    } finally {
      setLoading(false); // ✅ Hide loading state
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl animate-fadeIn">
      <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Login Button with Circular Spinner */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition flex justify-center items-center"
          disabled={loading} // ✅ Disable button when loading
        >
          {loading ? (
            <>
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </button>
      </form>

      <p className="text-sm text-center text-gray-600">
        Don't have an account?{' '}
        <button
          onClick={() => router.push('/signup')}
          className="text-blue-500 hover:underline"
          disabled={loading} // ✅ Disable button when loading
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
