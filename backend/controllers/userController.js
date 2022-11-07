import User from "../models/User.js";


export const createUser = async (req, res) => {

    const user = new User(req.body);
    await user.save()
    res.send(user);

}

export const loginUser = (req, res) => {

    res.send({test: 'for test'})
    
}

export const listUsers = async(req, res) => {
    res.send(await User.find());
}

export const retrieveUser = (req, res) => {

}

export const updateUser = (req, res) => {

}
