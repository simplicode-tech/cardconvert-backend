import mongoose from 'mongoose';
 const giftCardSchema = new mongoose.Schema({
    cardcategory: {type: String, required: true},
    cardtype: {type: String, required: true},
    cardamount: {type: Number, required: true},
    uploadedimg: {type: String},

    submitedby: {type: String, required: true},
    createdat: {type: String, required: true},
    cardrate: {type: Number, required: true},
    cardstatus: {type: String, required: true}
});
 const GiftCard = mongoose.model('GiftCard', giftCardSchema);
 export default GiftCard;