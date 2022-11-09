import mongoose from 'mongoose';

async function ConnectDB({ DB_path }) {
  const connection = await mongoose.connect(DB_path);
  return connection;
}

export default ConnectDB;