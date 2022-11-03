import mongoose from 'mongoose';
import ConnectDB from './connection.js';
import { DEV_CONFIG } from '../settings/dbConfig.js';

const connection = await ConnectDB(DEV_CONFIG)

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    password: String,
    type: String, 
});


const User = mongoose.model('Users', userSchema);

const demo = new User({
    name: 'win',
    lastname: 'that',
    password: 'always',
    type: 'winning'
});

await demo.save()