'use client';

import React, { useState } from 'react';
import { storage } from '../utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ProfileImageUploader = ({ userId, currentImage }) => {
  const [profileImage, setProfileImage] = useState(currentImage);

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `profile_images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Optionally, handle progress updates
        },
        (error) => {
          console.error('Upload failed:', error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setProfileImage(downloadURL);
          await updateUserProfileImage(userId, downloadURL);
        }
      );
    }
  };

  const updateUserProfileImage = async (userId, imageUrl) => {
    try {
      const res = await fetch(`/api/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Failed to update profile image:', errorData);
        return;
      }

      const responseData = await res.json();
      console.log('Profile image updated successfully', responseData);
    } catch (error) {
      console.error('An error occurred while updating the profile image:', error);
    }
  };

  return (
    <div>
      <div className="relative">
        <img src={profileImage || '/default-profile.png'} 
        alt="Profile" 
        className="w-30 h-30 rounded-full object-cover border" />
        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleProfileImageChange} />
      </div>
    </div>
  );
};

export default ProfileImageUploader;
