import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import User from '@/models/User';  // Import your User model

// GET: Fetch all users
export async function GET() {
  await connectMongoDB();

  try {
    const users = await User.find({}).lean();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST: Create a new user
export async function POST(req) {
  await connectMongoDB();
  const data = await req.json();

  try {
    const user = new User({ ...data, createdAt: new Date().toISOString() });
    await user.save();
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

// DELETE: Delete a user by ID
export async function DELETE(req) {
  await connectMongoDB();
  const { id } = await req.json();

  try {
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
