'use client';
import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { signIn, useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data: session, status } = useSession();

  const handleSignIn = (provider) => {
    signIn(provider, { callbackUrl: '/' });
  };

  // Optional: Handling loading and error states
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    // Redirect to home page or any other logic
    window.location.href = '/';
    return null;
  }

  
  return (
    <div className="flex justify-center items-center mt-16 mb-8">
      <div className="bg-white p-12 rounded-lg shadow-md flex flex-col gap-6 max-w-md w-full">
        <h3 className="text-2xl font-bold text-center">Create an account to start writing.</h3>
        <div
          className="flex items-center gap-3 p-3 border border-gray-300 rounded-full cursor-pointer transition-colors hover:bg-gray-100"
          onClick={() => handleSignIn('google')}
        >
          <FaGoogle size={20} className="text-gray-600" />
          <span className="text-gray-600">Sign in with Google</span>
        </div>
        <div
          className="flex items-center gap-3 p-3 border border-gray-300 rounded-full cursor-pointer transition-colors hover:bg-gray-100"
          onClick={() => handleSignIn('github')}
        >
          <FaGithub size={20} className="text-gray-600" />
          <span className="text-gray-600">Sign in with Github</span>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Click “Sign up” to agree to Blogify’s Terms of Service and acknowledge that Blogify’s Privacy Policy applies to you.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
