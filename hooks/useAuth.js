// hooks/useAuth.js
'use client'
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = (redirectTo = '/login') => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push(redirectTo); // Redirect if not authenticated
  }, [session, status]);

  return session;
};

export default useAuth;
