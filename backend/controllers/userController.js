import User from "../models/User.js";


export const createUser = async (req, res) => {

    const user = new User(req.body);
    await user.save()
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
