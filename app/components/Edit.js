// components/EditButton.js
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const EditButton = ({ postId }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/write?edit=${postId}`);
  };

  return (
    <button className=" text-customBlack border border-customBlack rounded-full cursor-pointer transition-colors hover:bg-customBlack hover:text-white  px-4 py-2" onClick={handleEdit}>
      Edit
    </button>
  );
};

export default EditButton;
