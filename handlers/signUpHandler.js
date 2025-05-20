import bcrypt from 'bcrypt';
import Customer from "../models/customer.js";
export const signup = async (req, res) => {
    try{
    const {firstname, lastname, username, email, phone, password} = req.body;
    // check if user already exists
    const userExists = await Customer.findOne({email});
    if(userExists) return res.status(400).json({ message: `${email} already exists!, Kindly login to your account`});
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // save to db
    const newcustomer = new Customer({firstname, lastname, username, email, phone, password: hashedPassword});
    await newcustomer.save();
    res.status(201).json({ message: `${username} with ${email} is registered successfully!`});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};