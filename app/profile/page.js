'use client';

import { useSession, SessionProvider } from 'next-auth/react';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p className="text-gray-800">You are not signed in.</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <p>Signed in as {session.user.email}</p>
      {/* Add more profile details here */}
    </div>
  );
};

const ProfilePageWrapper = () => {
    return (
      <SessionProvider>
        <ProfilePage />
      </SessionProvider>
    );
  };
  
  export default ProfilePageWrapper;
