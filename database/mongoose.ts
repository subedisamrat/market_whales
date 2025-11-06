import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

/*To avoid "next.js" hot reload it creates multiple fake connection so to avoid such things we are type checking those cached connections. */

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (!MONGODB_URI) throw new Error("MongoDB URI must be set within .env file");

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  console.log(`Connected to database ${process.env.NODE_ENV}--${MONGODB_URI}`);
};
