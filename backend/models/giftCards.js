import mongoose from 'mongoose';
 const giftCardSchema = new mongoose.Schema({
    cardcategory: {type: String, required: true},
    cardtype: {type: String, required: true},
    cardrate: {type: Number, required: true},
    uploadedimg: {type: String},
    cardthumbs: {type: String},
});
 const GiftCard = mongoose.model('GiftCard', giftCardSchema);
 export default GiftCard;