// app/write/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import PublishButton from '../components/Publish';
import { storage } from '../utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { GrAddCircle } from 'react-icons/gr';
import useAuth from '@/hooks/useAuth'; // Ensure this path is correct

// Dynamically import ReactQuill to ensure it only runs on the client-side
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.bubble.css';

const WritePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get('edit');

  const session = useAuth(); // Get session directly

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!session) {
      router.push('/login'); // Redirect to login page if not authenticated
    } else if (postId) {
      fetchPost(postId); // Fetch post data if postId is present
    }
  }, [session, postId, router]);

  const fetchPost = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`);
      if (res.ok) {
        const postData = await res.json();
        setTitle(postData.title);
        setContent(postData.content);
        setImages(postData.images || []); // Ensure images are properly set if available
      } else {
        console.error('Failed to fetch post data');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const handleAddImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setUploading(true);
        },
        (error) => {
          console.error('Upload failed:', error);
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
          // Clear previous images and add the new image URL
          setImages([downloadURL]);

          setUploading(false);
        }
      );
    }
  };

  const handlePublish = async () => {
    if (!title || !content) {
      setError('Title and content are required.');
      return;
    }

    if (!session || !session.user) {
      setError('You must be logged in to publish a post.');
      return;
    }

    const post = { title, content, images, author: session.user.id }; // Ensure author is included
    console.log('Post payload:', post); // Add console log to inspect the payload

    const url = postId ? `/api/posts/${postId}` : '/api/posts';

    try {
      const res = await fetch(url, {
        method: postId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (res.ok) {
        const data = await res.json();
        console.log('Post ' + (postId ? 'updated' : 'created') + ' successfully', data);
        router.push('/'); // Redirect to home page
      } else {
        const errorData = await res.json();
        console.error('Failed to ' + (postId ? 'update' : 'create') + ' post:', errorData);
        setError('Failed to ' + (postId ? 'update' : 'create') + ' post. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while ' + (postId ? 'updating' : 'creating') + ' the post:', error);
      setError('An error occurred while ' + (postId ? 'updating' : 'creating') + ' the post. Please try again.');
    }
  };

  return (
    <div className="container mx-auto flex flex-col min-h-screen py-8">
      <div className="mb-8 relative">
        <h1 className="text-3xl font-bold mb-4">{postId ? 'Edit Post' : 'Write a New Post'}</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
      </div>

      <div className="mb-4">
        <label className="flex items-center cursor-pointer">
          <GrAddCircle size={20} className="mr-2" />
          <input
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            className="hidden"
          />
          <span>Add Image</span>
        </label>
      </div>

      {uploading && <p>Uploading image...</p>}

      <div className="image-preview">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Preview ${index}`} className="preview-img" />
        ))}
      </div>

      <div className="relative">
        <ReactQuill theme="bubble" value={content} onChange={setContent} placeholder="Tell your story..." />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="publish-btn mt-auto flex">
        <PublishButton onClick={handlePublish} />
      </div>
    </div>
  );
};

export default WritePage;
