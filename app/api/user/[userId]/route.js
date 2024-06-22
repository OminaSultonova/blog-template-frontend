import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import User from '@/models/User';
import mongoose from 'mongoose';

export async function PUT(req, { params }) {
  const { userId } = params; // Destructuring id from params
  const { imageUrl } = await req.json();

  if (!mongoose.isValidObjectId(userId)) {
    return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
  }

  try {
    await connectMongoDB();
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { image: imageUrl },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Profile image updated successfully', updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Error updating profile image:', error);
    return NextResponse.json({ error: 'Failed to update profile image' }, { status: 500 });
  }
}
