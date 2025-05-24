import mongoose from 'mongoose';
 const customerSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
    tradehistory: [{
    cardcategory: String, 
    cardtype: String, 
    cardamount: Number, 
    createdat: String,
    cardrate: Number,
    cardstatus: String
}],
});
 const Customer = mongoose.model('Customer', customerSchema);
 export default Customer;