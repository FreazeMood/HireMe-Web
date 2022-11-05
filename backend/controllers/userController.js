import User from "../models/User.js";


export const createUser = async (req, res) => {

    const user = new User(req.body);
    await user.save()
    res.send(user);

}

export const loginUser = (req, res) => {

    res.send({test: 'for test'})
    
}

export const listUser = (req, res) => {

}

export const updateUser = (req, res) => {

}

export const retrieveUser = (req, res) => {

}
