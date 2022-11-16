import User from "../models/User.js";


export const createUser = async (req, res, next) => {

    const user_exist = await User.findOne({ email: req.body.email }).catch((err) => {
        console.log(err);
    });

    if (user_exist) {
        res.statusCode = 409;
        const err = 'User alreay exists.'
        return next(err);
    }

    const user = await User.create(req.body);

    res.send(user);

}

export const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const isAuth = User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
     
        user.comparePassword(password, (err, isMatch) => {
            if (err) throw err;
            console.log(isMatch);
        });
    }).clone();

    res.send(await isAuth);
    
}

export const listUsers = async (req, res) => {
    res.send({ test: await User.find() });
}

export const retrieveUser = async (req, res) => {
    
    const user = await User.find({ _id: req.params.id });
    res.send(user)
    
}

export const updateUser = (req, res) => {

}
