'use client';

import PostCard from './PostCard';

const HomePage = ({ posts }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-8">Latest Tech Posts</h2>
      <div>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
