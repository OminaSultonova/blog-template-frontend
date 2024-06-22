// app/api/users/[userId]/posts/route.js

import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET(req, { params }) {
  await connectMongoDB();

  const { userId } = params;
  try {
    const posts = await Post.find({ author: userId }).lean();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
