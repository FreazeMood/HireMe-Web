import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10; 

const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    password: String,
    type: String, 
});


UserSchema.pre('save', function(next){
    const user = this 
    if (user.password === undefined) {
        return next()
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



const User = mongoose.model('Users', UserSchema);
export default User;
