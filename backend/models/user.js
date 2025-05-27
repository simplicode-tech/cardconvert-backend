import mongoose from 'mongoose';
 const UserSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},

    role: {type: String, enum: ['user', 'admin'], default: 'user'},
    
    tradehistory: [{
    cardcategory: String, 
    cardtype: String, 
    cardamount: Number, 
    createdat: String,
    cardrate: Number,
    cardstatus: String
}],
});
 const User = mongoose.model('User', UserSchema);
 export default User;