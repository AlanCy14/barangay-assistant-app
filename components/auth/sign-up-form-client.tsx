// File: components/auth/sign-up-form-client.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpFormClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Sign Up failed');
      } else {
        // Redirect to dashboard
        router.push('/dashboard');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Barangay Assistant</h1>
      <h2>Sign Up</h2>

      {error && (
        <div className="p-3 mb-4 bg-red-100 border border-red-300 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="input-field"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input-field"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input-field"
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      <div className="footer">
        <p>
          Already have an account?{' '}
          <a href="/login" className="text-[#0a3a67] font-semibold hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
