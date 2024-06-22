'use client';
import React from 'react';

const DeleteButton = ({ postId, onDelete }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this post?');
    if (confirmed) {
      try {
        const response = await fetch(`/api/posts/${postId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Post deleted successfully');
          onDelete(postId); // Call the onDelete callback to update the state
        } else {
          alert('Failed to delete post');
        }
      } catch (error) {
        console.error('An error occurred while deleting the post', error);
        alert('An error occurred while deleting the post');
      }
    }
  };

  return (
    <button className=" text-customBlack border border-customBlack rounded-full cursor-pointer transition-colors px-4 py-2 hover:bg-customBlack hover:text-white " onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
