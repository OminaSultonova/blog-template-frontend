// app/api/posts/[postId]/route.js
import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Post from '@/models/Post';

// PUT: Update a post by ID
export async function PUT(req, { params }) {
  await connectMongoDB();
  const { postId } = params;  // Updated parameter name
  const data = await req.json();

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { ...data, updatedAt: new Date().toISOString() },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// GET: Fetch a single post by ID
export async function GET(req, { params }) {
  await connectMongoDB();

  const { postId } = params;  // Updated parameter name
  try {
    const post = await Post.findById(postId).lean();
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

// DELETE: Delete a single post by ID
export async function DELETE(req, { params }) {
  await connectMongoDB();
  const { postId } = params;

  try {
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}