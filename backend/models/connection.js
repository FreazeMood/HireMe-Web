import mongoose from 'mongoose';

async function ConnectDB({DB_path}) {
  const connection = await mongoose.connect(`mongodb://localhost:27017/${DB_name}`);
  return connection;
}

export default ConnectDB;