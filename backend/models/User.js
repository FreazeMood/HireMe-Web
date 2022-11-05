import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    password: String,
    type: String, 
});


const User = mongoose.model('Users', userSchema);
export default User;
