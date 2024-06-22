// components/PublishButton.js
'use client'
import React from 'react';

const PublishButton = ({ onClick }) => {
  return (
    <button className="bg-green-500 text-white rounded px-4 py-2 hover:text-green-800" onClick={onClick}>
      Publish
    </button>
  );
};

export default PublishButton;
