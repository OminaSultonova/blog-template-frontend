'use client';
import React from 'react';

const WritePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Write a new post</h1>
      <form className="bg-white p-6 shadow rounded">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input type="text" id="title" name="title" className="mt-1 p-2 border w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea id="content" name="content" rows="6" className="mt-1 p-2 border w-full"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input type="text" id="image" name="image" className="mt-1 p-2 border w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Publish
        </button>
      </form>
    </div>
  );
};

export default WritePage;
