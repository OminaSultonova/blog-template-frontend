'use client';

import { useParams } from 'next/navigation';

const PostDetails = () => {
  const { id } = useParams();

  // Fetch post data based on id
  // You can use a useEffect hook to fetch data from an API
  // or directly pass the data if you are using server-side rendering

  return (
    <div className="container mx-auto py-8">
      <img src="https://via.placeholder.com/200" alt="Post image" className="w-900 h-400 mb-4" />
      <h1 className="text-3xl font-bold mb-8">Post Title</h1>
      <p>Post content goes here...</p>
    </div>
  );
};

export default PostDetails;
