'use client';

import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="md:flex md:flex-row-reverse">
        <img src={post.imageUrl} alt={post.title} className="w-full md:w-1/3 h-48 object-cover" />
        <div className="p-4 md:w-2/3">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
          <Link href={`/posts/${post._id}`}>
            <span className="text-blue-500 hover:underline">Read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
