import bcrypt from 'bcrypt';
import User from '../models/user.js';
export const signup = async (req, res) => {
    try{
    const {firstname, lastname, username, email, phone, password} = req.body;
    // check if user already exists
    const userExists = await User.findOne({email});
    if(userExists) return res.status(400).json({ message: `${email} already exists!, Kindly login to your account`});
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // save to db
    const newuser = new User({firstname, lastname, username, email, phone, password: hashedPassword});
    await newuser.save();
    res.status(201).json({ message: `${username} with ${email} is registered successfully!`});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};