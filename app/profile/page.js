'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import DeleteButton from '../components/Delete';
import EditButton from '../components/Edit';
import ProfileImageUploader from '../components/ProfileImageUploader';
import DOMPurify from 'dompurify';


const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // Redirect to login page
    } else if (status === 'authenticated') {
      fetchPosts();
    }
  }, [status, router]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`/api/user/${session.user.id}/posts`);
      if (res.ok) {
        const postData = await res.json();
        setPosts(postData);
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoadingPosts(false);
    }
  };

  const handlePostDelete = (postId) => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  if (status === 'loading' || loadingPosts) {
    return <p>Loading...</p>; // Optionally, add a loading state
  }

  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="flex items-center gap-4">
        <ProfileImageUploader userId={session.user.id} currentImage={session.user.image} />
        <div>
          <h2 className="text-xl font-bold">{session.user.name}</h2>
          <p className="text-gray-600">{session.user.email}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white rounded-full px-4 py-2 mt-4"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="mb-4">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.substring(0, 100)) + '...' }}></div>
              <div className="flex space-x-2 mt-2">
                <EditButton postId={post._id} />
                <DeleteButton postId={post._id} onDelete={handlePostDelete} />
              </div>
            </div>
          ))
        ) : (
          <p>No posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
