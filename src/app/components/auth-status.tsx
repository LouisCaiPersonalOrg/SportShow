'use client';

import { useSession } from 'next-auth/react';

export default function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="fixed top-4 right-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  if (status === 'authenticated' && session?.user) {
    return (
      <div className="fixed top-4 right-4 p-4 bg-green-100 dark:bg-green-800 rounded-lg shadow-md">
        <p className="text-green-800 dark:text-green-200">Logged in as:</p>
        <p className="text-green-900 dark:text-green-100 font-medium">{session.user.email}</p>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 p-4 bg-red-100 dark:bg-red-800 rounded-lg shadow-md">
      <p className="text-red-800 dark:text-red-200">Not logged in</p>
    </div>
  );
}