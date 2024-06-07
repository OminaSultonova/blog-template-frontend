'use client'

import HomePage from "./components/HomePage";
// Mock data
const posts = [
  { _id: 1, title: 'First Post', content: 'This is the first post', imageUrl: 'https://via.placeholder.com/150' },
  { _id: 2, title: 'Second Post', content: 'This is the second post', imageUrl: 'https://via.placeholder.com/150' },
  // Add more mock posts here
];

export default function Page() {
  return <HomePage posts={posts} />;
}
