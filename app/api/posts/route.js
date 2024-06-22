import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Post from '@/models/Post';  // Import your Post model

// GET: Fetch all posts
export async function GET() {
  await connectMongoDB();

  try {
    const posts = await Post.find({}).lean();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST: Create a new post
export async function POST(req) {
  await connectMongoDB();
  let data;

  try {
    data = await req.json();
  } catch (error) {
    console.error('Invalid JSON:', error);
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!data.title || !data.content || !data.author || !data.images) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const post = new Post({ ...data, createdAt: new Date().toISOString() });
    await post.save();
    return NextResponse.json({ message: 'Post created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to create post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

// DELETE: Delete a post by ID
export async function DELETE(req) {
  await connectMongoDB();
  let data;

  try {
    data = await req.json();
  } catch (error) {
    console.error('Invalid JSON:', error);
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!data.id) {
    return NextResponse.json({ error: 'Missing post ID' }, { status: 400 });
  }

  try {
    await Post.findByIdAndDelete(data.id);
    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
