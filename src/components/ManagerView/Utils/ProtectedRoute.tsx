'use client'
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

const ProtectedRoute = ({ children } : {children: ReactNode}) => {
  const router = useRouter();

  useEffect(() => {
    const user = secureLocalStorage.getItem('USER');
    if (!user) {
      router.push('/');
    }
  }, [router]);

  return children;
};

export default ProtectedRoute;