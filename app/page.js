

'use client';

import React, { useEffect, useState } from 'react';
import PostCard from './components/PostCard';
import Header from './components/Header';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('An error occurred while fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
    <Header />
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
    </>
  );
};

export default HomePage;

