import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const loginhandle = async (req, res) => {
    try{
        const {email, password} = req.body;
        // find user
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({ message: `${email} does not exists!, Try again`});
        // check password match
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'Incorrect Password!'});
        // const token
        const token = jwt.sign({id: user._id, email:user.email}, process.env.JWT_SECRET, {expiresIn: '10m'});
        // response
        res.status(200).json({
            token, 
            message: 'Logged in Successfully!',
            user:{
                name: user.firstname,
                email: user.email,
                username: user.username
            }
        });
    }
    catch(err){
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};