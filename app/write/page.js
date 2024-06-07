'use client';

import { GrAddCircle } from "react-icons/gr";
import { useState } from 'react';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handlePublish = (e) => {
    e.preventDefault();
    // Handle publish logic here
    console.log('Publishing:', { title, content, image });
  };

  const handleAddImage = () => {
    // Handle add image logic here
    console.log('Adding image');
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Write a New Post</h2>
        <button 
          onClick={handlePublish} 
          className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800"
        >
          Publish
        </button>
      </div>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <div className="flex items-center">
            <input
              id="image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={handleAddImage}
              className="ml-2 flex items-center justify-center text-customGray hover:gray-800"
            >
              <GrAddCircle size={30} />
              <span className="ml-1"></span>
            </button>
          </div>
        </div>
      <form onSubmit={handlePublish}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="10"
          />
        </div>
       
      
      </form>
    </div>
  );
};

export default WritePage;
