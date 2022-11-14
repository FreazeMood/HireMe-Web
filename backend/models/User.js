import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import autoIncrementFactory from 'mongoose-sequence';
import { SALT_WORK_FACTOR } from '../settings/dbConfig.js';


const autoIncrement = autoIncrementFactory(mongoose);

const UserSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    lastname: String,
    email: String,
    password: String,
    type: String,

}, { _id: false });


UserSchema.plugin(autoIncrement, { inc_field: '_id' });


UserSchema.pre('save', function(next){
    const user = this 
    if (user.password === undefined) { // if there is no password throw err
        return next();
    };
    
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) console.log(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) console.log(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('Users', UserSchema);
export default User;
