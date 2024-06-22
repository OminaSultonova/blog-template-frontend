import mongoose from 'mongoose';

const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return; // If already connected, do nothing
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default connectMongoDB;
