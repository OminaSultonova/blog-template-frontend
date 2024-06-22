'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PostDetails = () => {
  const { id } = useParams(); // Extracting `id` from the URL query
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch post data based on id from your API or database
      fetchPost(id);
    }
  }, [id]); // Only refetch when `id` changes

  const fetchPost = async (postId) => {
    try {
      const res = await fetch(`/api/posts/${postId}`); // Corrected API endpoint
      if (res.ok) {
        const postData = await res.json();
        setPost(postData);
      } else {
        const errorData = await res.json();
        console.error('Failed to fetch post:', errorData);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>; // Optional loading indicator
  }

  return (
    <div className="container mx-auto py-8 px-4">
    <div className="flex flex-col items-center">
      <img
        src={post.images[0] || 'https://via.placeholder.com/200'}
        alt="Post image"
        className="w-full max-w-2xl h-auto mb-4"
      />
      <div className="w-full max-w-2xl text-left">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  </div>
  );
};

export default PostDetails;
